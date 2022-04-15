import { DataState } from "../enum/DataState";
import { Product } from "../model/product";

export interface AppState<T> {
    dataState: DataState;
    data?: T[]; //optional 
    error?: string; //optional
}