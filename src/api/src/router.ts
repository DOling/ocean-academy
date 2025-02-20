import * as Router from '@koa/router'
import { Context } from 'koa'

import { getPublicUser } from './resolvers/page/getPublicUser/getPublicUser'
import { setName } from './resolvers/page/setName/setName'
import { addProgress } from './resolvers/user/addProgress/addProgress'
import { changePassword } from './resolvers/user/changePassword/changePassword'
import { forgotPassword } from './resolvers/user/forgotPassword/forgotPassword'
import { isCertified } from './resolvers/user/isCertified/isCertified'
import { login } from './resolvers/user/login/login'
import { resetPassword } from './resolvers/user/resetPassword/resetPassword'
import { signUp } from './resolvers/user/signUp/signUp'
import { tokenUri } from './resolvers/user/tokenUri/tokenUri'
import { tokenUriOld } from './resolvers/user/tokenUri/tokenUriOld'

const router = new Router()

router.get('/', async (ctx: Context) => {
  ctx.body = 'You are not supposed to be here ;)'
})

router.post('/user/sign-up', signUp)
router.post('/user/login', login)
router.post('/user/add-progress', addProgress)
router.post('/user/reset-password', resetPassword)
router.post('/user/forgot-password', forgotPassword)
router.post('/user/change-password', changePassword)
router.get('/user/is-certified', isCertified)
router.get('/user/token-uri/:username/:course', tokenUri)
router.get('/user/token-uri/:username', tokenUriOld)

router.post('/page/get-user', getPublicUser)
router.post('/page/set-name', setName)

export { router }
