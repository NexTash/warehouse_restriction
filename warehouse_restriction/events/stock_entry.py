import frappe

@frappe.whitelist()
def stock_entry_set_warehouse(doctype, txt, searchfield, start, page_len, filters):
    warehouse_list = []
    
    company = filters.get('company') if filters else None
    
    if frappe.db.exists("Warehouse Restriction", {'user': frappe.session.user, 'document_name': "Stock Entry"}):
        r_warehouse_list = frappe.get_list("Warehouse Restriction", {'user': frappe.session.user, 'document_name': "Stock Entry"}, ['name'])
        warehouse = frappe.get_doc("Warehouse Restriction", r_warehouse_list[0].name)
        
        unique_warehouse = {}
        
        for row in warehouse.warehouses:
            if row.warehouse not in unique_warehouse:
                unique_warehouse[row.warehouse] = row.warehouse
                warehouse_list.append((row.warehouse, frappe.get_value("Warehouse", row.warehouse, "warehouse_name")))
    else:
        if company:
            warehouses = frappe.get_all("Warehouse", filters={'company': company ,"is_group":0}, fields=['name', 'warehouse_name'])
            for warehouse in warehouses:
                warehouse_list.append((warehouse.name, warehouse.warehouse_name))
    
    return warehouse_list

def restrictwarehouse(doc,method=None):
    warehouse=doc.from_warehouse
    if doc.stock_entry_type == "Material Receipt":
        return 0
    if not warehouse:
        warehouse = doc.items[0].s_warehouse
    if frappe.db.exists("Warehouse Restriction", {'user': frappe.session.user,'document_name': "Stock Entry"}):
        
        restricted_warehouse = frappe.get_doc("Warehouse Restriction", frappe.session.user+"-Stock Entry") 
        exist = 0
        for row in restricted_warehouse.warehouses:
            if row.warehouse == warehouse:
                exist += 1
        if not exist:
            frappe.throw(f"Warehouse {warehouse} is not asigned to current user. ")  
    
    return 0