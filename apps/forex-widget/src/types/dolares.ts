
    export interface Afluencia {
    }

    export interface Observaciones {
    }

    export interface Casa {
        compra: string;
        venta: string;
        agencia: string;
        nombre: string;
        variacion: string;
        ventaCero: string;
        decimales: string;
        mejor_compra: string;
        mejor_venta: string;
        fecha: string;
        recorrido: string;
        afluencia: Afluencia;
        observaciones: Observaciones;
    }

    export interface DolarSi {
        casa: Casa;
    }
