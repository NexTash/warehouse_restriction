frappe.ui.form.on("Material Request", {
    onload:function(frm) {
        frm.set_query("set_warehouse", () => {
            return {
                query: "warehouse_restriction.events.material_request.set_warehouse",
                filters: {
                    company: frm.doc.company  // Pass the company from the form
                }
            };
        });
        frm.set_query('warehouse', 'items', () => {
            return {
                query: "warehouse_restriction.events.material_request.set_warehouse",
                filters: {
                    company: frm.doc.company
                }
            }
        })
    },
})