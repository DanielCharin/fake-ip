export class IPData {
  ip?: string;
  country?: string;
  country_code?: string;
  country_code3?: string;
  continent_code?: string;
  city?: string;
  region?: string;
  latitude?: string;
  longitude?: string;
  accuracy?: number;
  timezone?: string;
  organization?: string;
  asn?: number;
  organization_name?: string;

  constructor(obj) {
    Object.assign(this, obj);
  }
}
