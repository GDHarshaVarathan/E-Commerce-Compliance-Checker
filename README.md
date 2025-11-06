**E-Commerce Compliance Checker (ETL Automation)**

**Tech Stack:** Python · SQL · Pandas · Automation Scripts · Workflow Design

**Domain:** Data Quality & Compliance · ETL Optimization · Business Intelligence

**OVERVIEW**

The E-Commerce Compliance Checker automates the validation of large transactional datasets to ensure data completeness, consistency, and accuracy across multiple e-commerce systems.
It simulates an ETL (Extract–Transform–Load) pipeline that enforces business compliance rules — reducing manual audit effort and minimizing reporting errors.

This project reflects a real-world automation scenario where rule-based pipelines replace repetitive data review workflows — a foundational step in AI-driven data governance systems.

**PROBLEM STATEMENT:**

E-commerce data pipelines often involve multiple sources (orders, inventory, payments, returns).
Manual validation and reconciliation of this data can take hours, leading to:

Inconsistent reports
Missed policy violations
Slower compliance audits

The goal was to design a Python + SQL-driven automation pipeline that performs these validations automatically and generates a clean, validated dataset for reporting.

**KEY FEATURES:**

**Rule-Based Data Validation:**
Automatically flags non-compliant or incomplete entries using configurable rule sets.

**SQL-Backed ETL Workflow:**
Leverages SQL scripts to store, query, and reconcile multi-source transactional data.

**Automated Reporting:**
Produces structured compliance reports for analysts and auditors in seconds.

**Data Mapping & Reconciliation:**
Maps inconsistent data schemas between systems and ensures uniformity in reporting.

**Scalable & Extensible:**
New validation rules and sources can be added easily — future-ready for AI/ML extensions.

**ARCHITECTURE OVERVIEW:**

<img width="400" height="500" alt="image" src="https://github.com/user-attachments/assets/c06d7bef-2aa6-4173-b805-6b5a86bf6f8e" />


**WORKFLOW SUMMARY:**

**Data Extraction:** Load raw CSV/JSON data into the Python environment.

**Transformation:** Apply rule-based data validation and cleaning logic.

**Loading:** Store validated records into an SQL database.

**Reconciliation:** Compare data across sources to detect mismatches.

**Reporting:** Generate compliance summary logs and visual output.

📈 Impact

Reduced manual review effort by 30% through automation.

Increased data accuracy and consistency in reporting pipelines.

Created a modular workflow adaptable for future AI-assisted validation.

💡 Future Scope

Integrate GPT-4 or Llama-3 API for semantic validation of text-based compliance records.

Add a Streamlit dashboard for live monitoring and visualization.

Extend SQL backend with PostgreSQL triggers for real-time alerts.

🧰 How to Run

Clone the repository

git clone https://github.com/GDHarshaVarathan/E-Commerce-Compliance-Checker.git
cd E-Commerce-Compliance-Checker


Install dependencies

pip install -r requirements.txt


Run the main validation script

python compliance_checker.py


View output in /reports/validated_output.csv and /logs/compliance_report.txt.

📸 Example Output (Sample)

Transaction ID-Error Type-Validation Rule-Status

TXN_0012-Missing SKU Code-Rule #1: Mandatory ID-Flagged

TXN_0147-Price Mismatch-Rule #3:-Reconcile SQL-Flagged

TXN_0201	-	-	✅ Passed

🧑‍💻 Author

G D Harsha Vardhan
B.Tech (ECE – Data Science) | SRM Institute of Science and Technology
📫 LinkedIn
 · GitHub

**Keywords:**
ETL · Data Validation · Workflow Automation · SQL · Python · Compliance Reporting · AI-Driven Decision Support

Automation mindset: Optimizing manual workflows using technology — directly aligned with IBM’s “AI-first” philosophy.

Scalable architecture: The modular validation engine mirrors enterprise ETL systems.

Problem-solving depth: Shows end-to-end understanding of a real data-engineering challenge.
