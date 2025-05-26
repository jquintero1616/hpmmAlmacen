import {useContext} from 'react';
import {KardexContext} from '../contexts/kardexContext';
export const useKardex = () => {
    const {
        kardex,
        GetKardexContext,
        GetKardexByIdContext,
        PostCreateKardexContext,
        PutUpdateKardexContext,
        DeleteKardexContext,
    } = useContext(KardexContext);

    if (
        !kardex ||
        !GetKardexContext ||
        !GetKardexByIdContext ||
        !PostCreateKardexContext ||
        !PutUpdateKardexContext ||
        !DeleteKardexContext
    ) {
        throw new Error('useKardex debe ser utilizado dentro de un KardexProvider');
    }

    return {
        kardex,
        GetKardexContext,
        GetKardexByIdContext,
        PostCreateKardexContext,
        PutUpdateKardexContext,
        DeleteKardexContext,
    };
};