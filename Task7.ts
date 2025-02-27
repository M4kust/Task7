//1 Вариант
class Vehicle {
  brand: string;
  model: string;
  year: number;
  color: string;
  ownerLastName: string;
  vinNumber: string;
  ownerFullName: string;
  registrationNumber: string;

  constructor(
      brand: string,
      model: string,
      year: number,
      color: string,
      ownerLastName: string,
      vinNumber: string,
      ownerFullName: string,
      registrationNumber: string
  ) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.ownerLastName = ownerLastName;
      this.vinNumber = vinNumber;
      this.ownerFullName = ownerFullName;
      this.registrationNumber = registrationNumber;
  }

  getVehicleInfo(): string {
      return `VIN-number: ${this.vinNumber}, Owner: ${this.ownerFullName}, Registration number: ${this.registrationNumber}`;
  }
}

interface VehicleStorage<T extends Vehicle> {
  CreationDate: Date;
  Vehicles: T[];

  getAllVehicles(): T[];
  sortVehiclesByBrand(): T[];
  getVehiclesByOwnerLastName(ownerLastName: string): T[];
}

class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
  public CreationDate: Date;
  public Vehicles: T[];

  constructor(creationDate: Date, vehicles: T[]) {
      this.CreationDate = creationDate;
      this.Vehicles = vehicles;
  }

  getAllVehicles(): T[] {
      return this.Vehicles;
  }

  sortVehiclesByBrand(): T[] {
      return this.Vehicles.sort((a, b) => a.brand.localeCompare(b.brand));
  }

  getVehiclesByOwnerLastName(ownerLastName: string): T[] {
      return this.Vehicles.filter(vehicle => vehicle.ownerLastName.toLowerCase() === ownerLastName.toLowerCase());
  }
}

// Пример использования:
const car1 = new Vehicle("LADA", "Granta", 2023, "Black", "Ustuzhanin", "M678OP", "Max Ustuzhanin", "AA1111");
const car2 = new Vehicle("BMW", "X5", 2019, "White", "Petrov", "Y456HE", "Oleg Petrov", "BB2222");
const car3 = new Vehicle("Audi", "Q7", 2021, "Blue", "Sidorov", "B789HA", "Sergey Sidorov", "CC3333");

const storage = new VehicleStorageImpl(new Date(), [car1, car2, car3]);

console.log("🚗 All vehicles:", storage.getAllVehicles());
console.log("📋 Sort vehicles by brand:", storage.sortVehiclesByBrand());
console.log("🔍 Vehicles by 'Ustuzhanin':", storage.getVehiclesByOwnerLastName("Ustuzhanin"));
