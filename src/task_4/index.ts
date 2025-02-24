/** Задача 4 - CurrencyConverterModule
 * Имеется класс CurrencyConverterModule. Который должен отвечать за
 * конвертацию валют.
 * Требуется:
 * 1) Реализовать классу CurrencyConverterModule 1 метод - convert
 * 	  метод должен принимать 3 аргумента:
 *		1.1) fromCurrency - валюта, из которой происходит конвертация
 *		1.2) toCurrency - валюта, в которую происходит конвертация
 *		1.3) moneyUnits - денежные единицы, полностью соответствующие валюте,
 *			 из которой происходит конвертация
 *	  Метод должен возвращать набор денежных единиц в той валюте, в которую происходит конвертация
 *	  Для простоты реализации будем считать, что банкомат конвертирует только по курсу
 *	  1USD = 70RUB и кратные курсу суммы (т.е. банкомат не может сконвертировать 100RUB, может только 70, 140 и т.д.)
 * 2) Типизировать все свойства и методы класса UserSettingsModule,
 * 	  пользуясь уже предоставленными интерфейсами (избавиться от всех any типов)
*/

import { Currency } from '../enums';
import {IMoneyUnit, MoneyRepository} from "../task_1";

export class CurrencyConverterModule {
	private _moneyRepository: any;

	constructor(initialMoneyRepository: any) {
		this._moneyRepository = initialMoneyRepository;
	}

	public convertMoneyUnits(fromCurrency: Currency, toCurrency: Currency, moneyUnits: Array<IMoneyUnit>): any {
		moneyUnits.forEach(unit =>
		{
			let denomination = parseInt(unit.moneyInfo.denomination)
			switch (fromCurrency + toCurrency) {
				case Currency.RUB + Currency.USD:
					 this._moneyRepository.giveOutMoney(unit.count * denomination / 70, toCurrency) ? unit.count * denomination / 70 : 0;
					 break;

				case Currency.USD + Currency.RUB:
					 this._moneyRepository.giveOutMoney(unit.count * denomination * 70, toCurrency) ? unit.count * denomination * 70 : 0;
					 break;

				case Currency.RUB + Currency.RUB:
					 this._moneyRepository.giveOutMoney(unit.count * denomination, toCurrency) ? unit.count * denomination : 0;
					 break;

				case Currency.USD + Currency.USD:
					 this._moneyRepository.giveOutMoney(unit.count * denomination, toCurrency) ? unit.count * denomination : 0;
					 break;
			}
		});
		return this._moneyRepository;
	}
}
