import { Transaction } from './transaction';
import { FilterConfigInterface } from '../interfaces/filter-config.interface';
export class FilterConfig implements FilterConfigInterface {
  public NegativeBalance = false;
  public IsDisplayed(transaction: Transaction): boolean {
    let result = true;
    if (this.NegativeBalance && (transaction.Balance >= 0)) {
      result = false;
    }
    return result;
  }
  public loadFromJsonString(jsonString: string) {
    if (jsonString == null) {
      return;
    }
    const o: FilterConfigInterface = JSON.parse(jsonString);
    if (o == null) {
      return;
    }
    if (o.NegativeBalance !== undefined) {
      this.NegativeBalance = o.NegativeBalance;
    }
  }
}
