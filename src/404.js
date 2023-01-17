import React from "react";

export default function NotFound({ msg, textSize }) {
  return (
    <div className="m-4">
      <h1 className={`font-bold text-${textSize || 8}xl`}>{msg || 404}</h1>
      {!msg && <h1 className="font-bold text-4xl m-4">{"Page not found!"}</h1>}
    </div>
  );
}
