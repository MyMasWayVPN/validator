import { endpoint, headers, Result } from '../utils'

export default async function onepunchman(id: number, zone: number): Promise<Result> {
  const body = `voucherPricePoint.id=308475&voucherPricePoint.price=44000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=ONE_PUNCH_MAN&shopLang=id_ID`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
if (data.success == true) {
    return {
      success: true,
      game: 'ONE_PUNCH_MAN',
      id,
      name: data.confirmationFields.username
    }
  }
  else {
    return {
      success: false,
      message: 'KONTOL'
    }
  }
}
