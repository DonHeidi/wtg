import type { MediaEnumeration } from './MediaEnumeration.ts'


/**
 * <a href="https://www.iptc.org/">IPTC</a> "Digital Source" codes for use with the [[digitalSourceType]] property, providing information about the source for a digital media object.
 * In general these codes are not declared here to be mutually exclusive, although some combinations would be contradictory if applied simultaneously, or might be considered mutually incompatible by upstream maintainers of the definitions. See the IPTC <a href="https://www.iptc.org/std/photometadata/documentation/userguide/">documentation</a>
 *  for <a href="https://cv.iptc.org/newscodes/digitalsourcetype/">detailed definitions</a> of all terms.
 */
export interface IPTCDigitalSourceEnumeration extends MediaEnumeration {

}