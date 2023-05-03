export const API_ENDPOINTS = {
  createMetric: "/create-metric",
  customQuery: {
    parse: "custom-query/parse",
    create: "custom-query/create"
  },
  metricPreview: "/metric-preview",
  sources: {
    canonicals: "/sources/canonicals",
    metrics: "/sources/metrics",
    metric:(metricName)=>`/sources/metrics/${metricName}`
  },
  metricEntries: "/metric-entries",
  entry: {
    fetch: (id) => `/metric-entries/${id}`,
    approve: "/metric-entries/approve",
    reject: "/metric-entries/reject",
    patch: (id) => `/metric-entries/${id}`,
  },
  approve: "/metric-entries/approve",
  reject: "/metric-entries/reject"
};