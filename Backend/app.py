from flask import Flask, jsonify
from flask_cors import CORS
from collections import Counter
from datetime import datetime

app = Flask(__name__)
CORS(app)

products_data = [
    {"id": 1, "title": "Product A", "price": 29.99, "platform": "Amazon",   "complianceStatus": "Compliant",    "lastChecked": "2025-10-01"},
    {"id": 2, "title": "Product B", "price": 15.49, "platform": "Flipkart", "complianceStatus": "Non-compliant","lastChecked": "2025-10-02"},
    {"id": 3, "title": "Product C", "price": 99.00, "platform": "Amazon",   "complianceStatus": "Compliant",    "lastChecked": "2025-10-01"},
    {"id": 4, "title": "Product D", "price": 54.99, "platform": "Myntra",   "complianceStatus": "Compliant",    "lastChecked": "2025-10-02"},
    {"id": 5, "title": "Product E", "price": 11.49, "platform": "Flipkart", "complianceStatus": "Non-compliant","lastChecked": "2025-10-02"},
    {"id": 6, "title": "Product F", "price": 20.15, "platform": "Myntra",   "complianceStatus": "Compliant",    "lastChecked": "2025-10-03"},
    {"id": 7, "title": "Product G", "price": 47.60, "platform": "Amazon",   "complianceStatus": "Compliant",    "lastChecked": "2025-10-03"},
    {"id": 8, "title": "Product H", "price": 63.00, "platform": "Flipkart", "complianceStatus": "Non-compliant","lastChecked": "2025-10-03"},
    {"id": 9, "title": "Product I", "price": 88.90, "platform": "Myntra",   "complianceStatus": "Non-compliant","lastChecked": "2025-10-01"},
    {"id": 10,"title": "Product J", "price": 51.50, "platform": "Amazon",   "complianceStatus": "Compliant",    "lastChecked": "2025-10-02"},
    {"id": 11,"title": "Product K", "price": 35.25, "platform": "Flipkart", "complianceStatus": "Non-compliant","lastChecked": "2025-10-03"},
    {"id": 12,"title": "Product L", "price": 18.70, "platform": "Myntra",   "complianceStatus": "Compliant",    "lastChecked": "2025-10-03"},
    {"id": 13,"title": "Product M", "price": 79.00, "platform": "Amazon",   "complianceStatus": "Non-compliant","lastChecked": "2025-10-01"},
    {"id": 14,"title": "Product N", "price": 55.55, "platform": "Flipkart", "complianceStatus": "Compliant",    "lastChecked": "2025-10-01"},
    {"id": 15,"title": "Product O", "price": 26.80, "platform": "Myntra",   "complianceStatus": "Non-compliant","lastChecked": "2025-10-03"}
]

@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products_data)

@app.route('/api/aggregated/platform-counts', methods=['GET'])
def platform_counts():
    count = Counter(p["platform"] for p in products_data)
    result = [{"platform": k, "count": v} for k, v in count.items()]
    return jsonify(result)

@app.route('/api/aggregated/compliance-status', methods=['GET'])
def compliance_status_counts():
    count = Counter(p["complianceStatus"] for p in products_data)
    result = [{"status": k, "count": v} for k, v in count.items()]
    return jsonify(result)

@app.route('/api/aggregated/check-history', methods=['GET'])
def check_history():
    count = Counter(p["lastChecked"] for p in products_data)
    sorted_dates = sorted(count.items(), key=lambda x: datetime.strptime(x[0], "%Y-%m-%d"))
    result = [{"date": k, "count": v} for k, v in sorted_dates]
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
