import { Module, INestApplication } from '@nestjs/common';
import { EnvModule } from './env/EnvModule';
import { SessionModule } from './session/SessionModule';
import { NextModule } from './next/NextModule';
import { AuthLogicalModule } from './auth/AuthLogicalModule';
import { UserModule } from './user/UserModule';

/**
 * Logic module
 *
 * @export
 * @class LogicModule
 */
@Module({
	imports: [EnvModule, SessionModule, NextModule, AuthLogicalModule, UserModule],
})
export class LogicModule {

	/**
	 * 初始化
	 *
	 * @param {INestApplication} app
	 * @memberof LogicModule
	 */
	public initialize(app: INestApplication): any {
		// enable session store in PostgreSQL
		app.get(SessionModule).initialize(app);

		// enable passport session
		// NOTE: we must use this at the end of `app.use()` list
		app.get(AuthLogicalModule).initialize(app);
	}
}
