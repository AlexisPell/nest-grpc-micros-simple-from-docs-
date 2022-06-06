import { Observable } from 'rxjs';

export interface IGrpcMathService {
  accumulate(numberArray: INumberArray): Observable<any>;
  Accumulate: any;
}

interface INumberArray {
  data: number[];
}
