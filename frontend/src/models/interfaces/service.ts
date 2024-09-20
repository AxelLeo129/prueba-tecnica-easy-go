/**
 * @interface PutResponse
 * Representa la respuesta de una solicitud de actualización (PUT) a un recurso.
 * 
 * @property {boolean} updated - Indica si el recurso fue actualizado correctamente.
 */
export interface PutResponse { 
    updated: boolean 
};

/**
 * @interface PostResponse
 * Representa la respuesta de una solicitud de creación (POST) de un recurso.
 * 
 * @property {boolean} created - Indica si el recurso fue creado correctamente.
 */
export interface PostResponse { 
    created: boolean 
};