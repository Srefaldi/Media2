import React, { useEffect } from "react";

const Kuis = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      setTimeout(function() {
        var element = document.getElementById("kuis");
        var kuis = new tepianKuis(element, {
            Key: "nCHoSM8ZOMTY9Nl7hXofHXqJwwjMvyT5",
            quiz: "75sm",
            title: "BAB 1"
        });
      }, 100); // Delay for 100 milliseconds
    `;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="kuis">Kuis</div>;
};

export default Kuis;
