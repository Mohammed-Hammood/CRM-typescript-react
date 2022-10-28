export interface SuggestionTypes {
    value: string
    unrestricted_value:string
    data: {
        country:string 
        region:string 
        city:string | null 
        country_iso_code: string 
        street:string | null
    }
}