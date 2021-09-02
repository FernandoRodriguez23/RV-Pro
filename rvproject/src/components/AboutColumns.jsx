import React, { useState } from "react";

function AboutColumns() {
  return (
    <div className="row">
      <div className="column-1">
        <h2>Background</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          quasi enim ipsam ratione dolorum suscipit placeat quia sunt eligendi
          repellat aut eius, voluptatum ab ipsum ipsa consectetur labore dolores
          corporis.
        </p>
      </div>
      <div className="column-2">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          repellendus doloremque incidunt eligendi quibusdam minima, aut
          perferendis earum, ea omnis doloribus officiis reiciendis vitae, eaque
          voluptatibus cum eos in nobis.
        </p>
      </div>
      <div className="column-3">
        <h2>Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem
          aliquid illo necessitatibus laudantium minus fuga. Nulla est sapiente
          eos, ullam, quis distinctio facilis eveniet beatae magnam dicta,
          quisquam quas?
        </p>
      </div>
    </div>
  );
}

export default AboutColumns;
