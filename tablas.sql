-- Eliminar las tablas si ya existen para evitar errores
DROP TABLE IF EXISTS "VirtualHosts";
DROP TABLE IF EXISTS "Hosts";

-- Crear la tabla para almacenar los datos de los hosts
CREATE TABLE IF NOT EXISTS "Hosts" (
    "Name" TEXT NOT NULL UNIQUE,
    "Port" INTEGER NOT NULL PRIMARY KEY, 
    "Path" TEXT NOT NULL,
    "IndexFile" TEXT,
    "IndexFilesEnabled" BOOLEAN NOT NULL DEFAULT 1,
    "IsActive" BOOLEAN NOT NULL DEFAULT 1
);

-- Crear la tabla para almacenar los datos de los hosts virtuales
CREATE TABLE IF NOT EXISTS "VirtualHosts" (
    "Port" INTEGER NOT NULL,
    "Hostname" TEXT NOT NULL,
    "Path" TEXT NOT NULL,
    "IndexFile" TEXT,
    "IndexFilesEnabled" BOOLEAN NOT NULL DEFAULT 1,
    "IsActive" BOOLEAN NOT NULL DEFAULT 1,
    FOREIGN KEY ("Port") REFERENCES "Hosts"("Port") ON DELETE CASCADE
);

INSERT INTO Hosts (Name, Port, Path, IndexFile) 
VALUES ('MainHost', 8080, '/var/www/main', 'index.html');

INSERT INTO VirtualHosts (Port, Hostname, Path, IndexFile, IndexFilesEnabled, IsActive) 
VALUES (8080, 'example.com', '/var/www/example', 'index.php', 1, 1);

INSERT INTO VirtualHosts (Port, Hostname, Path, IndexFile, IndexFilesEnabled, IsActive) 
VALUES (8080, 'test.com', '/var/www/test', 'index.html', 1, 1);


SELECT h.Name, h.Port, vh.Hostname, vh.Path, vh.IndexFile
FROM Hosts h
JOIN VirtualHosts vh ON h.Port = vh.Port
WHERE h.Port = 8080;