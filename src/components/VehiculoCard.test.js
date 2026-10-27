import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import VehiculoCard from "./VehiculoCard";

describe("Pruebas del componente VehiculoCard", () => {
  const vehiculoMock = {
    id: 1,
    patente: "MOCK-01",
    marca: "Toyota",
    modelo: "Corolla",
    precio: 15000,
    imagen: "url-falsa.jpg",
  };

  it("Debe mostrar la marca y el modelo correctamente", () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={() => {}} />);
    expect(screen.getByText("Toyota Corolla")).toBeTruthy();
  });

  it("Debe mostrar la patente y el precio", () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={() => {}} />);
    expect(screen.getByText(/MOCK-01/)).toBeTruthy();
    expect(screen.getByText(/15.000/)).toBeTruthy();
  });

  it("Debe llamar a la función alHacerClic cuando se presiona el botón", () => {
    let clicRealizado = false;
    const mockFuncion = () => {
      clicRealizado = true;
    };
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    fireEvent.click(screen.getByText("Seleccionar Auto"));
    expect(clicRealizado).toBe(true);
  });
});
