import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VehiculoCard from './VehiculoCard';

describe('Pruebas Unitarias de VehiculoCard', () => {
  
  const vehiculoMock = { 
    id: 1, 
    patente: "MOCK-01", 
    marca: "Toyota", 
    modelo: "Yaris", 
    precio: 15000, 
    imagen: "../img/Toyota Yaris.jpg", 
  };

  const mockFuncion = jasmine.createSpy('alHacerClic');

  beforeEach(() => {
    mockFuncion.calls.reset();
  });

  it('Prueba 1: Debe renderizar la marca y el modelo', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    expect(screen.getByText('Toyota Yaris')).toBeTruthy();
  });

  it('Prueba 2: Debe renderizar la patente', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    expect(screen.getByText(/MOCK-01/)).toBeTruthy();
  });

  it('Prueba 3: Debe renderizar el precio formateado', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    expect(screen.getByText(/15.000/)).toBeTruthy();
  });

  it('Prueba 4: Debe mostrar el texto "Precio:"', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    expect(screen.getByText(/Precio:/)).toBeTruthy();
  });

  it('Prueba 5: Debe renderizar la etiqueta de imagen', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    const imagen = screen.getByRole('img');
    expect(imagen).toBeTruthy();
  });

  it('Prueba 6: Debe tener un botón con el texto "Seleccionar Auto"', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    const boton = screen.getByText('Seleccionar Auto');
    expect(boton).toBeTruthy();
  });

  it('Prueba 7: El botón debe tener las clases de Bootstrap', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    const boton = screen.getByText('Seleccionar Auto');
    expect(boton.className).toContain('btn');
  });

  it('Prueba 8: Debe ejecutar la función alHacerClic al presionar', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    const boton = screen.getByText('Seleccionar Auto');
    fireEvent.click(boton);
    expect(mockFuncion).toHaveBeenCalled();
  });

  it('Prueba 9: Debe enviar el vehículo correcto al hacer clic', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    const boton = screen.getByText('Seleccionar Auto');
    fireEvent.click(boton);
    expect(mockFuncion).toHaveBeenCalledWith(vehiculoMock);
  });

  it('Prueba 10: No debe ejecutar la función sin hacer clic', () => {
    render(<VehiculoCard vehiculo={vehiculoMock} alHacerClic={mockFuncion} />);
    expect(mockFuncion).not.toHaveBeenCalled();
  });

});