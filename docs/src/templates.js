// Expense templates functionality
import { currentUser } from './state.js';

// Default expense templates
export const defaultTemplates = [
    { id: 'coffee', name: 'Coffee', amount: 5.50, category: 'food', description: 'Coffee shop' },
    { id: 'lunch', name: 'Lunch', amount: 12.00, category: 'food', description: 'Lunch meal' },
    { id: 'gas', name: 'Gas', amount: 45.00, category: 'transport', description: 'Gas station' },
    { id: 'groceries', name: 'Weekly Groceries', amount: 85.00, category: 'groceries', description: 'Weekly grocery shopping' },
    { id: 'uber', name: 'Rideshare', amount: 15.00, category: 'transport', description: 'Uber/Lyft ride' },
    { id: 'netflix', name: 'Netflix', amount: 15.99, category: 'fun', description: 'Netflix subscription' }
];

// Get user templates from Firebase
export async function getUserTemplates() {
    if (!currentUser) return [];
    
    try {
        const { getFirestore, doc, getDoc } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js');
        const db = getFirestore();
        const docRef = doc(db, 'userTemplates', currentUser.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            return docSnap.data().templates || [];
        }
        return [];
    } catch (error) {
        console.error('Failed to get user templates:', error);
        return [];
    }
}

// Save user templates to Firebase
export async function saveUserTemplates(templates) {
    if (!currentUser) return false;
    
    try {
        const { getFirestore, doc, setDoc } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js');
        const db = getFirestore();
        const docRef = doc(db, 'userTemplates', currentUser.uid);
        await setDoc(docRef, { templates });
        return true;
    } catch (error) {
        console.error('Failed to save user templates:', error);
        return false;
    }
}

// Get all templates (default + user)
export async function getAllTemplates() {
    const userTemplates = await getUserTemplates();
    return [...defaultTemplates, ...userTemplates];
}

// Add a new template
export async function addTemplate(template) {
    const userTemplates = await getUserTemplates();
    const newTemplate = {
        id: `user-${Date.now()}`,
        ...template,
        createdAt: new Date().toISOString()
    };
    
    userTemplates.push(newTemplate);
    const success = await saveUserTemplates(userTemplates);
    return success ? newTemplate : null;
}

// Update an existing template
export async function updateTemplate(templateId, updates) {
    const userTemplates = await getUserTemplates();
    const templateIndex = userTemplates.findIndex(t => t.id === templateId);
    
    if (templateIndex === -1) return false;
    
    userTemplates[templateIndex] = { ...userTemplates[templateIndex], ...updates };
    return await saveUserTemplates(userTemplates);
}

// Delete a template
export async function deleteTemplate(templateId) {
    const userTemplates = await getUserTemplates();
    const filteredTemplates = userTemplates.filter(t => t.id !== templateId);
    return await saveUserTemplates(filteredTemplates);
}

// Apply template to expense form
export function applyTemplate(template, setExpenseAmount, setExpenseCategory, setExpenseDescription) {
    setExpenseAmount(template.amount.toString());
    setExpenseCategory(template.category);
    setExpenseDescription(template.description);
}

// Render templates in UI
export function renderTemplates(templates, onTemplateSelect, showManagement = false) {
    if (!templates || templates.length === 0) {
        return '<p class="text-gray-500 text-center py-4">No templates available</p>';
    }

    return templates.map(template => {
        const isUserTemplate = template.id.startsWith('user-');
        return `
            <div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors" 
                 onclick="selectTemplate('${template.id}')">
                <div class="flex-1">
                    <div class="font-medium text-gray-900">${template.name}</div>
                    <div class="text-sm text-gray-500">$${template.amount.toFixed(2)} • ${template.description}</div>
                </div>
                ${showManagement && isUserTemplate ? `
                    <div class="flex gap-2">
                        <button onclick="editTemplate('${template.id}'); event.stopPropagation();" 
                                class="p-1 text-blue-600 hover:bg-blue-100 rounded">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </button>
                        <button onclick="removeTemplate('${template.id}'); event.stopPropagation();" 
                                class="p-1 text-red-600 hover:bg-red-100 rounded">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

// Create template from current expense
export function createTemplateFromExpense(amount, category, description, name) {
    return {
        name: name || description || 'Custom Template',
        amount: parseFloat(amount),
        category: category,
        description: description || 'Custom expense'
    };
}