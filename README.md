# HTTPdethroner

HTTPdethroner es una herramienta gráfica avanzada diseñada para administrar múltiples servicios HTTP. Inspirada en la funcionalidad de servidores web como Apache, HTTPdethroner ofrece una interfaz gráfica intuitiva que permite a los usuarios configurar y gestionar servicios HTTP y VirtualHosts de manera sencilla y eficiente.

## Características principales

- **Interfaz Gráfica de Usuario (GUI)**: Configure y gestione servicios HTTP a través de una interfaz gráfica fácil de usar.
- **Administración de VirtualHosts**: Cree, edite y elimine VirtualHosts con unos pocos clics.
- **Configuraciones Avanzadas**: Acceda a opciones de configuración avanzadas para personalizar el comportamiento de los servicios HTTP.
- **Soporte para Múltiples Servicios**: Levante y gestione varios servicios HTTP simultáneamente.

## Requisitos

Para desarrollar y contribuir a HTTPdethroner, asegúrese de que su entorno cumpla con los siguientes requisitos:

- **Node.js (versión 20.13 o superior)**: Necesario para ejecutar scripts de desarrollo y la propia aplicación.
- **npm (versión 10.8 o superior)**: Utilizado para gestionar las dependencias del proyecto y ejecutar scripts de desarrollo.
- **Editor de Código**: Se recomienda usar un editor de código con soporte para JavaScript como [Visual Studio Code](https://code.visualstudio.com/).
- **Git**: Para la clonación del repositorio y la gestión del control de versiones.
- **Acceso a la Terminal**: Para ejecutar comandos de desarrollo, como iniciar el servidor o instalar dependencias.
- **Sistema Operativo Compatible**: El desarrollo se puede realizar en Windows, o Linux.

### Configuración Opcional (Recomendado)
Con estos requisitos y configuraciones opcionales, estará preparado para contribuir efectivamente al desarrollo de HTTPdethroner.

- **Visual Studio Code Extensions**:
  - **es6-string-html**: Proporciona resaltado de sintaxis para plantillas HTML dentro de cadenas de texto ES6.
  - **Error Lens**: Muestra los errores y advertencias directamente en el editor, lo que facilita su identificación y corrección.
  - **Node.js Extension Pack**: Un paquete de extensiones útiles para el desarrollo en Node.js, que incluye herramientas de depuración, fragmentos de código y gestión de dependencias.
  - **HTML CSS Support**: Mejora el soporte para HTML y CSS en Visual Studio Code, incluyendo el autocompletado y la validación.
  - **HTML Tag Wrapper**: Permite envolver fácilmente fragmentos de texto con etiquetas HTML, mejorando la eficiencia al escribir código HTML.
  - **JavaScript (ES6) code snippets**: Proporciona fragmentos de código útiles para JavaScript ES6, lo que acelera la escritura de código al ofrecer atajos para estructuras comunes como funciones, importaciones, y más.

Con estos requisitos y configuraciones opcionales, estará preparado para contribuir efectivamente al desarrollo de HTTPdethroner.

# Guía de Configuración y Despliegue

## Configuración Inicial

Para configurar el entorno de desarrollo de HTTPdethroner, siga estos pasos:

1. **Copiar el archivo de configuración de entorno**:

   - En **Linux**:
     ```bash
     cp .env.example .env
     ```
   - En **Windows**:
     ```bash
     copy .env.example .env
     ```

2. **Instalar las dependencias del proyecto**:

   ```bash
   npm install
   ```

## Iniciar la Aplicación en Modo Desarrollo 

Para iniciar la aplicación en modo desarrollo, ejecute el siguiente comando:

```bash
  npm run dev
```

Esto iniciará un servidor de desarrollo, permitiéndole visualizar la aplicación y realizar cambios en tiempo real

## compilar para produccion 
Para compilar la aplicación para producción, utilice el comando adecuado según su sistema operativo:

- **En Linux**:
    ```bash
    npm run buildLinux
    ```

- **En Windows**:
    ```bash
    npm run buildWin
    ```

## Configuración Obligatoria de Git para Manejo de Finales de Línea

Para garantizar que los finales de línea se manejen correctamente y evitar problemas con la integridad de los archivos, **es obligatorio configurar Git** según el sistema operativo que estés utilizando. Realiza las siguientes configuraciones en tu entorno local:

- **En Windows**, ejecuta el siguiente comando en tu terminal:

  ```bash
  git config --global core.autocrlf true
  ```

Esto asegura que Git convierta los finales de línea de `LF` a `CRLF` cuando extraigas archivos, y de `CRLF` a `LF` al hacer commits.

- **En Linux**, puedes configurar Git para que no haga conversiones automáticas de finales de línea, ya que se está utilizando un archivo `.gitattributes` para gestionar los finales de línea:

  ```bash
  git config --global core.autocrlf false
  ```

El archivo `.gitattributes` definirá cómo Git maneja los finales de línea al hacer commits y al extraer archivos, asegurando la coherencia entre sistemas operativos.

**Es esencial que completes esta configuración para todos los colaboradores del proyecto.** De lo contrario, podrías enfrentar inconsistencias en los finales de línea, lo que podría romper los archivos y complicar la colaboración.
