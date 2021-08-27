export const drinkURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_APP}/drinks`
export const foodURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_APP}/food`
export const musicURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_APP}/music`

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}