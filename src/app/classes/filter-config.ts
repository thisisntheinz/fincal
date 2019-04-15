import { FilterConfigInterface } from '../interfaces/filter-config.interface';
import { ForecastEvent } from './forecast-event';
export class FilterConfig implements FilterConfigInterface {
  public NegativeBalance = false;
  public IsDisplayed(forecastEvent: ForecastEvent): boolean {
    let result = true;
    if (this.NegativeBalance && (forecastEvent.balance >= 0)) {
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
