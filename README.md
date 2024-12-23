# Anagrama

# Prueba Técnica agrupar anagramas
Este proyecto es una API construida con Express que permite formar grupos de anagramas.


### Estructura de Datos

Cada usuario tiene una lista de palabras. Ejemplo:

```json
{
    "anagramas": [
        [
            "lap",
            "pal"
        ],
        [
            "evil",
            "veil",
            "vile"
        ],
        [
            "enlist",
            "listen",
            "silent"
        ],
        [
            "art",
            "rat",
            "tar"
        ]
    ]
}
```

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio.
2. Instala las dependencias necesarias usando npm:
    ```bash
    npm install
    ```
3. Inicia el servidor de desarrollo:
    ```bash
    npm start
    ```
## Uso
Para agrupar anagramas, realiza una solicitud POST a:
    ```bash
    http://localhost:3000/devolver/anagrama
    ```
### Parámetros
* Lista de palabras en json

### Ejemplo de solicitud
    http://localhost:3000/devolver/anagrama

### Ejemplo de respuesta
{
    "anagramas": [
        [
            "art",
            "rat",
            "tar"
        ],
        [
            "enlist",
            "listen",
            "silent"
        ],
        [
            "evil",
            "veil",
            "vile"
        ],
        [
            "lap",
            "pal"
        ]
    ]
}

## Notas
* La API devuelve un código de error 400 si falta la lista.

```json
Este `README` detalla el propósito, la configuración y el uso de la API para agrupar anagramas.
```