app_name = "warehouse_restriction"
app_title = "Warehouse Restriction"
app_publisher = "support@nextash.com"
app_description = "nextash"
app_email = "nextah@gmail.cm"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/warehouse_restriction/css/warehouse_restriction.css"
# app_include_js = "/assets/warehouse_restriction/js/warehouse_restriction.js"

# include js, css files in header of web template
# web_include_css = "/assets/warehouse_restriction/css/warehouse_restriction.css"
# web_include_js = "/assets/warehouse_restriction/js/warehouse_restriction.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "warehouse_restriction/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
doctype_js = {
    "Material Request" : "public/js/material_request.js",
    "Stock Reconciliation" : "public/js/stock_reconciliation.js",
    "Stock Entry" : "public/js/stock_entry.js"
    }
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "warehouse_restriction.utils.jinja_methods",
# 	"filters": "warehouse_restriction.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "warehouse_restriction.install.before_install"
# after_install = "warehouse_restriction.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "warehouse_restriction.uninstall.before_uninstall"
# after_uninstall = "warehouse_restriction.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "warehouse_restriction.utils.before_app_install"
# after_app_install = "warehouse_restriction.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "warehouse_restriction.utils.before_app_uninstall"
# after_app_uninstall = "warehouse_restriction.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "warehouse_restriction.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"warehouse_restriction.tasks.all"
# 	],
# 	"daily": [
# 		"warehouse_restriction.tasks.daily"
# 	],
# 	"hourly": [
# 		"warehouse_restriction.tasks.hourly"
# 	],
# 	"weekly": [
# 		"warehouse_restriction.tasks.weekly"
# 	],
# 	"monthly": [
# 		"warehouse_restriction.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "warehouse_restriction.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "warehouse_restriction.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "warehouse_restriction.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["warehouse_restriction.utils.before_request"]
# after_request = ["warehouse_restriction.utils.after_request"]

# Job Events
# ----------
# before_job = ["warehouse_restriction.utils.before_job"]
# after_job = ["warehouse_restriction.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"warehouse_restriction.auth.validate"
# ]
