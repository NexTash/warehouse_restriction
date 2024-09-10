import frappe

@frappe.whitelist()
def update_rate(item_code, rprice):
   docs = frappe.get_list("Item Price", filters={'price_list': 'Standard Selling', 'item_code': item_code})
   for row in docs:
      price_doc = frappe.get_doc("Item Price", row.name)
      if item_code == price_doc.item_code:
         price_doc.price_list_rate = rprice
         price_doc.save()
   frappe.msgprint("Rate Changed")