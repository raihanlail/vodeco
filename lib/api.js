export const sendContactForm = async (data) =>
    fetch("/api/contact1", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    });

    export const sendContactMail = async (data) =>
      fetch("/api/contact2", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      }).then((res) => {
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
      });