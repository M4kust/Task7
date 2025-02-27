var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, year, color, ownerLastName, vinNumber, ownerFullName, registrationNumber) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.ownerLastName = ownerLastName;
        this.vinNumber = vinNumber;
        this.ownerFullName = ownerFullName;
        this.registrationNumber = registrationNumber;
    }
    Vehicle.prototype.getVehicleInfo = function () {
        return "VIN-number: ".concat(this.vinNumber, ", Owner: ").concat(this.ownerFullName, ", Registration number: ").concat(this.registrationNumber);
    };
    return Vehicle;
}());
var VehicleStorageImpl = /** @class */ (function () {
    function VehicleStorageImpl(creationDate, vehicles) {
        this.CreationDate = creationDate;
        this.Vehicles = vehicles;
    }
    VehicleStorageImpl.prototype.getAllVehicles = function () {
        return this.Vehicles;
    };
    VehicleStorageImpl.prototype.sortVehiclesByBrand = function () {
        return this.Vehicles.sort(function (a, b) { return a.brand.localeCompare(b.brand); });
    };
    VehicleStorageImpl.prototype.getVehiclesByOwnerLastName = function (ownerLastName) {
        return this.Vehicles.filter(function (vehicle) { return vehicle.ownerLastName.toLowerCase() === ownerLastName.toLowerCase(); });
    };
    return VehicleStorageImpl;
}());
// Пример использования:
var car1 = new Vehicle("LADA", "Granta", 2023, "Black", "Ustuzhanin", "M678OP", "Max Ustuzhanin", "AA1111");
var car2 = new Vehicle("BMW", "X5", 2019, "White", "Petrov", "Y456HE", "Oleg Petrov", "BB2222");
var car3 = new Vehicle("Audi", "Q7", 2021, "Blue", "Sidorov", "B789HA", "Sergey Sidorov", "CC3333");
var storage = new VehicleStorageImpl(new Date(), [car1, car2, car3]);
console.log("🚗 All vehicles:", storage.getAllVehicles());
console.log("📋 Sort vehicles by brand:", storage.sortVehiclesByBrand());
console.log("🔍 Vehicles by 'Ustuzhanin':", storage.getVehiclesByOwnerLastName("Ustuzhanin"));
