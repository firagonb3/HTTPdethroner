-- Eliminar las tablas si ya existen para evitar errores
DROP TABLE IF EXISTS "VirtualHosts";
DROP TABLE IF EXISTS "Hosts";

-- Crear la tabla para almacenar los datos de los puertos
CREATE TABLE IF NOT EXISTS "Hosts" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL UNIQUE,
    "Port" INTEGER NOT NULL UNIQUE,
    "Path" TEXT NOT NULL,
    "IndexFile" TEXT,
    "IndexFilesEnabled" BOOLEAN NOT NULL DEFAULT 1,
    "IsActive" BOOLEAN NOT NULL DEFAULT 1
);

-- Crear la tabla para almacenar los datos de los hosts virtuales
CREATE TABLE IF NOT EXISTS "VirtualHosts" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "HostID" INTEGER NOT NULL,
    "Hostname" TEXT NOT NULL,
    "Path" TEXT NOT NULL,
    "IndexFile" TEXT,
    "IndexFilesEnabled" BOOLEAN NOT NULL DEFAULT 1,
    "IsActive" BOOLEAN NOT NULL DEFAULT 1,
    FOREIGN KEY ("HostID") REFERENCES "Hosts"("ID") ON DELETE CASCADE
);