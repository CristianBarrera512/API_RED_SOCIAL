/**
 * Clase encargarda de construir la respuesta del api estandar
 */

export class ResponseHelper {
  /**
   * Respuesta existosa
   */
  static success(data: any, statusCode = 200) {
    return {
      succes: true,
      statusCode,
      data,
    }
  }
  /**
   * Respuesta de error
   */
  static error(data:any, statusCode = 200){
    return{
      succes: true,
      statusCode,
      data,
    }
  }
}
