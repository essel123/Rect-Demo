import React from "react";

function API___Test() {
  const api = "https://invoice-app-bknd-strapi-cloud.onrender.com/invoices'";


React.useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, []);

  return <div />;
}

export default API___Test;
