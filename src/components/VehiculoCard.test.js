import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import VehiculoCard from "./VehiculoCard";

describe("Pruebas unitarias del componente VehiculoCard", () => {
  const vehiculoMock = {
    id: 1,
    patente: "MOCK-01",
    marca: "Toyota",
    modelo: "Yaris",
    precio: 15000,
    imagen: "/img/Toyota Yaris.jpg",
    categoria: "Económico",
  };

  const mockFuncion = jasmine.createSpy("alHacerClic");

  beforeEach(() => {
    mockFuncion.calls.reset();
  });

  it("Prueba 1: Debe renderizar el nombre del vehículo (Marca y Modelo)", () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    expect(screen.getByText("Toyota Yaris")).toBeTruthy();
  });

  it("Prueba 2: Debe renderizar la patente del vehículo", () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    expect(screen.getByText(/MOCK-01/)).toBeTruthy();
  });

  it("Prueba 3: Debe renderizar el precio formateado con separador de miles", () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    expect(screen.getByText(/15.000/)).toBeTruthy();
  });

  it('Prueba 4: Debe renderizar el texto "Precio:"', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    expect(screen.getByText(/Precio:/)).toBeTruthy();
  });

  it("Prueba 5: Debe renderizar una imagen con el atributo src correcto", () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    const imagen = screen.getByRole("img");
    expect(imagen.src).toContain("/img/Toyota%20Yaris.jpg");
  });

  it('Prueba 6: Debe renderizar un botón con el texto "Seleccionar Auto"', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    const boton = screen.getByText("Seleccionar Auto");
    expect(boton).toBeTruthy();
  });

  it('Prueba 7: El botón debe tener las clases de Bootstrap "btn" y "btn-dark"', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    const boton = screen.getByText("Seleccionar Auto");
    expect(boton.className).toContain("btn");
    expect(boton.className).toContain("btn-dark");
  });

  it("Prueba 8: Debe ejecutar la función alHacerClic al presionar el botón", () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    const boton = screen.getByText("Seleccionar Auto");
    fireEvent.click(boton);
    expect(mockFuncion).toHaveBeenCalled();
  });

  it("Prueba 9: Debe pasar el objeto vehiculo correcto a la función al hacer clic", () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    const boton = screen.getByText("Seleccionar Auto");
    fireEvent.click(boton);
    expect(mockFuncion).toHaveBeenCalledWith(vehiculoMock);
  });

  it("Prueba 10: No debe ejecutar la función alHacerClic si no se hace clic", () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    expect(mockFuncion).not.toHaveBeenCalled();
  });
});
