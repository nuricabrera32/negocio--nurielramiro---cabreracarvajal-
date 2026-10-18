# Guía de Métodos HTTP

En esta sección se explican los cinco métodos HTTP principales utilizados en el desarrollo web y las APIs REST, documentados con ejemplos reales sobre la API pública **JSONPlaceholder** (`https://jsonplaceholder.typicode.com/posts`).

---

## 1. GET
* **¿Para qué sirve?:** Se utiliza para solicitar o recuperar información de un recurso existente en el servidor. No modifica ningún dato.
* **Cómo se usa:** Se envía una petición indicando la URL del recurso que se desea consultar.
* **Ejemplo real:**
  * **URL:** `https://jsonplaceholder.typicode.com/posts/1`
  * **Body:** Ninguno (los métodos GET no llevan cuerpo).
  * **Código de Estado (Status Code):** `200 OK` (Indica que la petición fue exitosa).

---

## 2. POST
* **¿Para qué sirve?:** Se utiliza para crear un nuevo recurso en el servidor.
* **Cómo se usa:** Se envía la información del nuevo recurso dentro del cuerpo de la petición (*body*) en formato JSON.
* **Ejemplo real:**
  * **URL:** `https://jsonplaceholder.typicode.com/posts`
  * **Body (JSON):**
    ```json
    {
      "title": "Nuevo Post de Prueba",
      "body": "Contenido del post creado para la práctica.",
      "userId": 1
    }
    ```
  * **Código de Estado (Status Code):** `201 Created` (Indica que el recurso fue creado exitosamente).

---

## 3. PUT
* **¿Para qué sirve?:** Se utiliza para **reemplazar por completo** un recurso existente. Si falta algún campo en la petición, este se sobrescribe o elimina.
* **Cómo se usa:** Se envía la estructura completa del recurso actualizado a través del cuerpo de la petición.
* **Ejemplo real:**
  * **URL:** `https://jsonplaceholder.typicode.com/posts/1`
  * **Body (JSON):**
    ```json
    {
      "id": 1,
      "title": "Post Actualizado con PUT",
      "body": "Este texto reemplaza completamente el contenido anterior.",
      "userId": 1
    }
    ```
  * **Código de Estado (Status Code):** `200 OK`.

---

## 4. PATCH
* **¿Para qué sirve?:** Se utiliza para realizar **actualizaciones parciales** en un recurso. Solo modifica los campos que se envían, dejando intactos los demás.
* **Cómo se usa:** Se envía únicamente el campo o los campos que se desean modificar en el cuerpo de la petición.
* **Ejemplo real:**
  * **URL:** `https://jsonplaceholder.typicode.com/posts/1`
  * **Body (JSON):**
    ```json
    {
      "title": "Título Modificado Parcialmente con PATCH"
    }
    ```
  * **Código de Estado (Status Code):** `200 OK`.

---

## 5. DELETE
* **¿Para qué sirve?:** Se utiliza para eliminar un recurso específico del servidor.
* **Cómo se usa:** Se envía la petición especificando el identificador único del recurso que se desea borrar.
* **Ejemplo real:**
  * **URL:** `https://jsonplaceholder.typicode.com/posts/1`
  * **Body:** Ninguno.
  * **Código de Estado (Status Code):** `200 OK` (o `204 No Content`).

---

## Diferencia clave entre PUT y PATCH
* **PUT** realiza una sustitución total: sobreescribe el recurso entero enviando todos sus atributos obligatoriamente. Si se omite un campo, este se pierde o se vacía.
* **PATCH** realiza una modificación selectiva: actualiza únicamente los campos específicos que se envían en la petición, conservando el resto de la información intacta.

*Nota:* En herramientas de prueba como **JSONPlaceholder**, las modificaciones (PUT, PATCH, DELETE) se simulan localmente y reciben respuestas exitosas, pero los datos reales en el servidor no se alteran de forma permanente[span_3](start_span)[span_3](end_span).