import React, { useState, useEffect, useMemo } from "react";
import "./callbackfrom.scss";
import Formdropdownicon from "../../assets/svg/formdropdownicon";
import { Link } from "react-router-dom";

// <------- dropdown sr & cr icon ------->
import Searcicon from "../../assets/svg/searcicon";
import Closeicon from "../../assets/svg/closeicon";


// <-------------- country flag icons -------------->
import USFlag from "../../assets/countryicon/usa.png";
import UKFlag from "../../assets/countryicon/uk.png";
import INFlag from "../../assets/countryicon/india.png";
import BDFlag from "../../assets/countryicon/bangladesh.png";
import SRLNFlag from "../../assets/countryicon/sri-lanka.png";
import NPFlag from "../../assets/countryicon/nepal.png";
import AFFlag from "../../assets/countryicon/afghantistan.png";
import ALFlag from "../../assets/countryicon/albania.png";
import DZFlag from "../../assets/countryicon/algeria.png";
import ADFlag from "../../assets/countryicon/andorra.png";
import AOFlag from "../../assets/countryicon/angola.png";
import AGFlag from "../../assets/countryicon/antigua-and-barbuda.png";
import ARFlag from "../../assets/countryicon/argentina.png";
import AMFlag from "../../assets/countryicon/armenia.png";
import AUFlag from "../../assets/countryicon/australia.png";
import ATFlag from "../../assets/countryicon/austria.png";
import AZFlag from "../../assets/countryicon/azerbaijan.png";
import BSFlag from "../../assets/countryicon/bahamas.png";
import BHFlag from "../../assets/countryicon/bahrain.png";
import BBFlag from "../../assets/countryicon/barbados.png";
import BYFlag from "../../assets/countryicon/belarus.png";
import BEFlag from "../../assets/countryicon/belgium.png";
import BZFlag from "../../assets/countryicon/belize.png";
import BJFlag from "../../assets/countryicon/benin.png";
import BTFlag from "../../assets/countryicon/bhutan.png";
import BOFlag from "../../assets/countryicon/bolivia.png";
import BAFlag from "../../assets/countryicon/bosnia-and-herzegovina.png";
import BWFlag from "../../assets/countryicon/botswana.png";
import BRFlag from "../../assets/countryicon/brazil-.png";
import BNFlag from "../../assets/countryicon/brunei.png";
import BGFlag from "../../assets/countryicon/bulgaria.png";
import BFFlag from "../../assets/countryicon/burkina-faso.png";
import BIFlag from "../../assets/countryicon/burundi.png";
import CVFlag from "../../assets/countryicon/cabo-verde.png";
import KHFlag from "../../assets/countryicon/cambodia.png";
import CMFlag from "../../assets/countryicon/cameroon.png";
import CAFlag from "../../assets/countryicon/canada.png";
import CFFlag from "../../assets/countryicon/central-african-republic.png";
import TDFlag from "../../assets/countryicon/chad.png";
import CLFlag from "../../assets/countryicon/chile.png";
import CHNFlag from "../../assets/countryicon/china.png";
import COFlag from "../../assets/countryicon/colombia.png";
import KMFlag from "../../assets/countryicon/Comoros.png";
import CGFlag from "../../assets/countryicon/congo.png";
import CDFlag from "../../assets/countryicon/congo.png";
import CRFlag from "../../assets/countryicon/costa-rica.png";
import HRFlag from "../../assets/countryicon/croatia.png";
import CUFlag from "../../assets/countryicon/cuba.png";
import CYFlag from "../../assets/countryicon/cyprus.png";
import CZFlag from "../../assets/countryicon/czech-republic.png";
import DKFlag from "../../assets/countryicon/denmark.png";
import DJFlag from "../../assets/countryicon/djibouti.png";
import DMFlag from "../../assets/countryicon/dominica.png";
import DOFlag from "../../assets/countryicon/dominican-republic.png";
import ECFlag from "../../assets/countryicon/ecuador.png";
import EGFlag from "../../assets/countryicon/egypt.png";
import SVFlag from "../../assets/countryicon/el-salvador.png";
import GQFlag from "../../assets/countryicon/equatorial-guinea.png";
import ERFlag from "../../assets/countryicon/eritrea.png";
import EEFlag from "../../assets/countryicon/estonia.png";
import SZFlag from "../../assets/countryicon/eswatini.png";
import ETFlag from "../../assets/countryicon/ethiopia.png";
import FJFlag from "../../assets/countryicon/fiji.png";
import FIFlag from "../../assets/countryicon/finland.png";
import FRFlag from "../../assets/countryicon/france.png";
import GAFlag from "../../assets/countryicon/gabon.png";
import GMFlag from "../../assets/countryicon/gambia.png";
import GEFlag from "../../assets/countryicon/georgia.png";
import DEFlag from "../../assets/countryicon/germany.png";
import GHFlag from "../../assets/countryicon/ghana.png";
import GRFlag from "../../assets/countryicon/greece.png";
import GDFlag from "../../assets/countryicon/grenada.png";
import GTFlag from "../../assets/countryicon/guatemala.png";
import GNFlag from "../../assets/countryicon/guinea.png";
import GWFlag from "../../assets/countryicon/guinea-bissau.png";
import GYFlag from "../../assets/countryicon/guyana.png";
import HTFlag from "../../assets/countryicon/haiti.png";
import HNFlag from "../../assets/countryicon/honduras.png";
import HUFlag from "../../assets/countryicon/hungary.png";
import ISFlag from "../../assets/countryicon/iceland.png";
import IDFlag from "../../assets/countryicon/indonesia.png";
import IRFlag from "../../assets/countryicon/iran.png";
import IQFlag from "../../assets/countryicon/Iraq.png";
import IEFlag from "../../assets/countryicon/ireland.png";
import ILFlag from "../../assets/countryicon/israel.png";
import ITFlag from "../../assets/countryicon/italy.png";
import JMFlag from "../../assets/countryicon/jamaica.png";
import JPFlag from "../../assets/countryicon/japan.png";
import JOFlag from "../../assets/countryicon/jordan.png";
import KZFlag from "../../assets/countryicon/kazakhstan.png";
import KEFlag from "../../assets/countryicon/Kenya.png";
import KIFlag from "../../assets/countryicon/kiribati.png";
import KPFlag from "../../assets/countryicon/north-korea.png";
import KRFlag from "../../assets/countryicon/south-korea.png";
import KWFlag from "../../assets/countryicon/kuwait.png";
import KGFlag from "../../assets/countryicon/kyrgyzstan.png";
import LAFlag from "../../assets/countryicon/laos.png";
import LVFlag from "../../assets/countryicon/latvia.png";
import LBFlag from "../../assets/countryicon/Lebanon.png";
import LSFlag from "../../assets/countryicon/lesotho.png";
import LRFlag from "../../assets/countryicon/liberia.png";
import LYFlag from "../../assets/countryicon/libya.png";
import LIFlag from "../../assets/countryicon/liechtenstein.png";
import LTFlag from "../../assets/countryicon/lithuania.png";
import LUFlag from "../../assets/countryicon/luxembourg.png";
import MGFlag from "../../assets/countryicon/madagascar.png";
import MWFlag from "../../assets/countryicon/malawi.png";
import MYFlag from "../../assets/countryicon/malaysia.png";
import MVFlag from "../../assets/countryicon/maldives.png";
import MLFlag from "../../assets/countryicon/mali.png";
import MTFlag from "../../assets/countryicon/malta.png";
import MHFlag from "../../assets/countryicon/marshall-islands.png";
import MRFlag from "../../assets/countryicon/mauritania.png";
import MUFlag from "../../assets/countryicon/mauritius.png";
import MXFlag from "../../assets/countryicon/mexico.png";
import FMFlag from "../../assets/countryicon/micronesia.png";
import MDFlag from "../../assets/countryicon/moldova.png";
import MCFlag from "../../assets/countryicon/monaco.png";
import MNFlag from "../../assets/countryicon/mongolia.png";
import MEFlag from "../../assets/countryicon/montenegro.png";
import MAFlag from "../../assets/countryicon/morocco.png";
import MZFlag from "../../assets/countryicon/Mozambique.png";
import MMFlag from "../../assets/countryicon/myanmar.png";
import NAFlag from "../../assets/countryicon/namibia.png";
import NRFlag from "../../assets/countryicon/nepal.png";
import NLFlag from "../../assets/countryicon/netherlands.png";
import NZFlag from "../../assets/countryicon/New Zealand.png";
import NIFlag from "../../assets/countryicon/nicaragua.png";
import NEFlag from "../../assets/countryicon/niger.png";
import NGFlag from "../../assets/countryicon/nigeria.png";
import MKFlag from "../../assets/countryicon/north-macedonia.png";
import NOFlag from "../../assets/countryicon/norway.png";
import OMFlag from "../../assets/countryicon/oman.png";
import PKFlag from "../../assets/countryicon/pakistan.png";


export default function Callbackfrom() {
  const [selectedRegion, setSelectedRegion] = useState("US");
  const [phoneNumber, setPhoneNumber] = useState("+1 ");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const regions = useMemo(
    () => [
      { code: "AF", image: AFFlag, name: "Afghanistan", numberCode: "+93" },
      { code: "AL", image: ALFlag, name: "Albania", numberCode: "+355" },
      { code: "DZ", image: DZFlag, name: "Algeria", numberCode: "+213" },
      { code: "AD", image: ADFlag, name: "Andorra", numberCode: "+376" },
      { code: "AO", image: AOFlag, name: "Angola", numberCode: "+244" },
      { code: "AG", image: AGFlag, name: "Antigua and Barbuda", numberCode: "+1-268" },
      { code: "AR", image: ARFlag, name: "Argentina", numberCode: "+54" },
      { code: "AM", image: AMFlag, name: "Armenia", numberCode: "+374" },
      { code: "AU", image: AUFlag, name: "Australia", numberCode: "+61" },
      { code: "AT", image: ATFlag, name: "Austria", numberCode: "+43" },
      { code: "AZ", image: AZFlag, name: "Azerbaijan", numberCode: "+994" },
      { code: "BS", image: BSFlag, name: "Bahamas", numberCode: "+1-242" },
      { code: "BH", image: BHFlag, name: "Bahrain", numberCode: "+973" },
      { code: "BD", image: BDFlag, name: "Bangladesh", numberCode: "+880" },
      { code: "BB", image: BBFlag, name: "Barbados", numberCode: "+1-246" },
      { code: "BY", image: BYFlag, name: "Belarus", numberCode: "+375" },
      { code: "BE", image: BEFlag, name: "Belgium", numberCode: "+32" },
      { code: "BZ", image: BZFlag, name: "Belize", numberCode: "+501" },
      { code: "BJ", image: BJFlag, name: "Benin", numberCode: "+229" },
      { code: "BT", image: BTFlag, name: "Bhutan", numberCode: "+975" },
      { code: "BO", image: BOFlag, name: "Bolivia", numberCode: "+591" },
      { code: "BA", image: BAFlag, name: "Bosnia and Herzegovina", numberCode: "+387" },
      { code: "BW", image: BWFlag, name: "Botswana", numberCode: "+267" },
      { code: "BR", image: BRFlag, name: "Brazil", numberCode: "+55" },
      { code: "BN", image: BNFlag, name: "Brunei", numberCode: "+673" },
      { code: "BG", image: BGFlag, name: "Bulgaria", numberCode: "+359" },
      { code: "BF", image: BFFlag, name: "Burkina Faso", numberCode: "+226" },
      { code: "BI", image: BIFlag, name: "Burundi", numberCode: "+257" },
      { code: "CV", image: CVFlag, name: "Cabo Verde", numberCode: "+238" },
      { code: "KH", image: KHFlag, name: "Cambodia", numberCode: "+855" },
      { code: "CM", image: CMFlag, name: "Cameroon", numberCode: "+237" },
      { code: "CA", image: CAFlag, name: "Canada", numberCode: "+1" },
      { code: "CF", image: CFFlag, name: "Central African Republic", numberCode: "+236" },
      { code: "TD", image: TDFlag, name: "Chad", numberCode: "+235" },
      { code: "CL", image: CLFlag, name: "Chile", numberCode: "+56" },
      { code: "CN", image: CHNFlag, name: "China", numberCode: "+86" },
      { code: "CO", image: COFlag, name: "Colombia", numberCode: "+57" },
      { code: "KM", image: KMFlag, name: "Comoros", numberCode: "+269" },
      { code: "CG", image: CGFlag, name: "Congo", numberCode: "+242" },
      { code: "CD", image: CDFlag, name: "Congo (DRC)", numberCode: "+243" },
      { code: "CR", image: CRFlag, name: "Costa Rica", numberCode: "+506" },
      { code: "HR", image: HRFlag, name: "Croatia", numberCode: "+385" },
      { code: "CU", image: CUFlag, name: "Cuba", numberCode: "+53" },
      { code: "CY", image: CYFlag, name: "Cyprus", numberCode: "+357" },
      { code: "CZ", image: CZFlag, name: "Czech Republic", numberCode: "+420" },
      { code: "DK", image: DKFlag, name: "Denmark", numberCode: "+45" },
      { code: "DJ", image: DJFlag, name: "Djibouti", numberCode: "+253" },
      { code: "DM", image: DMFlag, name: "Dominica", numberCode: "+1-767" },
      { code: "DO", image: DOFlag, name: "Dominican Republic", numberCode: "+1-809" },
      { code: "EC", image: ECFlag, name: "Ecuador", numberCode: "+593" },
      { code: "EG", image: EGFlag, name: "Egypt", numberCode: "+20" },
      { code: "SV", image: SVFlag, name: "El Salvador", numberCode: "+503" },
      { code: "GQ", image: GQFlag, name: "Equatorial Guinea", numberCode: "+240" },
      { code: "ER", image: ERFlag, name: "Eritrea", numberCode: "+291" },
      { code: "EE", image: EEFlag, name: "Estonia", numberCode: "+372" },
      { code: "SZ", image: SZFlag, name: "Eswatini", numberCode: "+268" },
      { code: "ET", image: ETFlag, name: "Ethiopia", numberCode: "+251" },
      { code: "FJ", image: FJFlag, name: "Fiji", numberCode: "+679" },
      { code: "FI", image: FIFlag, name: "Finland", numberCode: "+358" },
      { code: "FR", image: FRFlag, name: "France", numberCode: "+33" },
      { code: "GA", image: GAFlag, name: "Gabon", numberCode: "+241" },
      { code: "GM", image: GMFlag, name: "Gambia", numberCode: "+220" },
      { code: "GE", image: GEFlag, name: "Georgia", numberCode: "+995" },
      { code: "DE", image: DEFlag, name: "Germany", numberCode: "+49" },
      { code: "GH", image: GHFlag, name: "Ghana", numberCode: "+233" },
      { code: "GR", image: GRFlag, name: "Greece", numberCode: "+30" },
      { code: "GD", image: GDFlag, name: "Grenada", numberCode: "+1-473" },
      { code: "GT", image: GTFlag, name: "Guatemala", numberCode: "+502" },
      { code: "GN", image: GNFlag, name: "Guinea", numberCode: "+224" },
      { code: "GW", image: GWFlag, name: "Guinea-Bissau", numberCode: "+245" },
      { code: "GY", image: GYFlag, name: "Guyana", numberCode: "+592" },
      { code: "HT", image: HTFlag, name: "Haiti", numberCode: "+509" },
      { code: "HN", image: HNFlag, name: "Honduras", numberCode: "+504" },
      { code: "HU", image: HUFlag, name: "Hungary", numberCode: "+36" },
      { code: "IS", image: ISFlag, name: "Iceland", numberCode: "+354" },
      { code: "IN", image: INFlag, name: "India", numberCode: "+91" },
      { code: "ID", image: IDFlag, name: "Indonesia", numberCode: "+62" },
      { code: "IR", image: IRFlag, name: "Iran", numberCode: "+98" },
      { code: "IQ", image: IQFlag, name: "Iraq", numberCode: "+964" },
      { code: "IE", image: IEFlag, name: "Ireland", numberCode: "+353" },
      { code: "IL", image: ILFlag, name: "Israel", numberCode: "+972" },
      { code: "IT", image: ITFlag, name: "Italy", numberCode: "+39" },
      { code: "JM", image: JMFlag, name: "Jamaica", numberCode: "+1-876" },
      { code: "JP", image: JPFlag, name: "Japan", numberCode: "+81" },
      { code: "JO", image: JOFlag, name: "Jordan", numberCode: "+962" },
      { code: "KZ", image: KZFlag, name: "Kazakhstan", numberCode: "+7" },
      { code: "KE", image: KEFlag, name: "Kenya", numberCode: "+254" },
      { code: "KI", image: KIFlag, name: "Kiribati", numberCode: "+686" },
      { code: "KP", image: KPFlag, name: "North Korea", numberCode: "+850" },
      { code: "KR", image: KRFlag, name: "South Korea", numberCode: "+82" },
      { code: "KW", image: KWFlag, name: "Kuwait", numberCode: "+965" },
      { code: "KG", image: KGFlag, name: "Kyrgyzstan", numberCode: "+996" },
      { code: "LA", image: LAFlag, name: "Laos", numberCode: "+856" },
      { code: "LV", image: LVFlag, name: "Latvia", numberCode: "+371" },
      { code: "LB", image: LBFlag, name: "Lebanon", numberCode: "+961" },
      { code: "LS", image: LSFlag, name: "Lesotho", numberCode: "+266" },
      { code: "LR", image: LRFlag, name: "Liberia", numberCode: "+231" },
      { code: "LY", image: LYFlag, name: "Libya", numberCode: "+218" },
      { code: "LI", image: LIFlag, name: "Liechtenstein", numberCode: "+423" },
      { code: "LT", image: LTFlag, name: "Lithuania", numberCode: "+370" },
      { code: "LU", image: LUFlag, name: "Luxembourg", numberCode: "+352" },
      { code: "MG", image: MGFlag, name: "Madagascar", numberCode: "+261" },
      { code: "MW", image: MWFlag, name: "Malawi", numberCode: "+265" },
      { code: "MY", image: MYFlag, name: "Malaysia", numberCode: "+60" },
      { code: "MV", image: MVFlag, name: "Maldives", numberCode: "+960" },
      { code: "ML", image: MLFlag, name: "Mali", numberCode: "+223" },
      { code: "MT", image: MTFlag, name: "Malta", numberCode: "+356" },
      { code: "MH", image: MHFlag, name: "Marshall Islands", numberCode: "+692" },
      { code: "MR", image: MRFlag, name: "Mauritania", numberCode: "+222" },
      { code: "MU", image: MUFlag, name: "Mauritius", numberCode: "+230" },
      { code: "MX", image: MXFlag, name: "Mexico", numberCode: "+52" },
      { code: "FM", image: FMFlag, name: "Micronesia", numberCode: "+691" },
      { code: "MD", image: MDFlag, name: "Moldova", numberCode: "+373" },
      { code: "MC", image: MCFlag, name: "Monaco", numberCode: "+377" },
      { code: "MN", image: MNFlag, name: "Mongolia", numberCode: "+976" },
      { code: "ME", image: MEFlag, name: "Montenegro", numberCode: "+382" },
      { code: "MA", image: MAFlag, name: "Morocco", numberCode: "+212" },
      { code: "MZ", image: MZFlag, name: "Mozambique", numberCode: "+258" },
      { code: "MM", image: MMFlag, name: "Myanmar", numberCode: "+95" },
      { code: "NA", image: NAFlag, name: "Namibia", numberCode: "+264" },
      { code: "NR", image: NRFlag, name: "Nauru", numberCode: "+674" },
      { code: "NP", image: NPFlag, name: "Nepal", numberCode: "+977" },
      { code: "NL", image: NLFlag, name: "Netherlands", numberCode: "+31" },
      { code: "NZ", image: NZFlag, name: "New Zealand", numberCode: "+64" },
      { code: "NI", image: NIFlag, name: "Nicaragua", numberCode: "+505" },
      { code: "NE", image: NEFlag, name: "Niger", numberCode: "+227" },
      { code: "NG", image: NGFlag, name: "Nigeria", numberCode: "+234" },
      { code: "MK", image: MKFlag, name: "North Macedonia", numberCode: "+389" },
      { code: "NO", image: NOFlag, name: "Norway", numberCode: "+47" },
      { code: "OM", image: OMFlag, name: "Oman", numberCode: "+968" },
      { code: "PK", image: PKFlag, name: "Pakistan", numberCode: "+92" },
      // { code: "PW", image: PWFlag, name: "Palau", numberCode: "+680" },
      // { code: "PA", image: PAFlag, name: "Panama", numberCode: "+507" },
      // { code: "PG", image: PGFlag, name: "Papua New Guinea", numberCode: "+675" },
      // { code: "PY", image: PYFlag, name: "Paraguay", numberCode: "+595" },
      // { code: "PE", image: PEFlag, name: "Peru", numberCode: "+51" },
      // { code: "PH", image: PHFlag, name: "Philippines", numberCode: "+63" },
      // { code: "PL", image: PLFlag, name: "Poland", numberCode: "+48" },
      // { code: "PT", image: PTFlag, name: "Portugal", numberCode: "+351" },
      // { code: "QA", image: QAFlag, name: "Qatar", numberCode: "+974" },
      // { code: "RO", image: ROFlag, name: "Romania", numberCode: "+40" },
      // { code: "RU", image: RUFlag, name: "Russia", numberCode: "+7" },
      // { code: "RW", image: RWFlag, name: "Rwanda", numberCode: "+250" },
      // { code: "KN", image: KNFlag, name: "Saint Kitts and Nevis", numberCode: "+1-869" },
      // { code: "LC", image: LCFlag, name: "Saint Lucia", numberCode: "+1-758" },
      // { code: "VC", image: VCFlag, name: "Saint Vincent and the Grenadines", numberCode: "+1-784" },
      // { code: "WS", image: WSFlag, name: "Samoa", numberCode: "+685" },
      // { code: "SM", image: SMFlag, name: "San Marino", numberCode: "+378" },
      // { code: "ST", image: STFlag, name: "Sao Tome and Principe", numberCode: "+239" },
      // { code: "SA", image: SAFlag, name: "Saudi Arabia", numberCode: "+966" },
      // { code: "SN", image: SNFlag, name: "Senegal", numberCode: "+221" },
      // { code: "RS", image: RSFlag, name: "Serbia", numberCode: "+381" },
      // { code: "SC", image: SCFlag, name: "Seychelles", numberCode: "+248" },
      // { code: "SL", image: SLFlag, name: "Sierra Leone", numberCode: "+232" },
      // { code: "SG", image: SGFlag, name: "Singapore", numberCode: "+65" },
      // { code: "SK", image: SKFlag, name: "Slovakia", numberCode: "+421" },
      // { code: "SI", image: SIFlag, name: "Slovenia", numberCode: "+386" },
      // { code: "SB", image: SBFlag, name: "Solomon Islands", numberCode: "+677" },
      // { code: "SO", image: SOFlag, name: "Somalia", numberCode: "+252" },
      // { code: "ZA", image: ZAFlag, name: "South Africa", numberCode: "+27" },
      // { code: "SS", image: SSFlag, name: "South Sudan", numberCode: "+211" },
      // { code: "ES", image: ESFlag, name: "Spain", numberCode: "+34" },
      { code: "LK", image: SRLNFlag, name: "Sri Lanka", numberCode: "+94" },
      // { code: "SD", image: SDFlag, name: "Sudan", numberCode: "+249" },
      // { code: "SR", image: SRFlag, name: "Suriname", numberCode: "+597" },
      // { code: "SZ", image: SZFlag, name: "Swaziland", numberCode: "+268" },
      // { code: "SE", image: SEFlag, name: "Sweden", numberCode: "+46" },
      // { code: "CH", image: CHFlag, name: "Switzerland", numberCode: "+41" },
      // { code: "SY", image: SYFlag, name: "Syria", numberCode: "+963" },
      // { code: "TW", image: TWFlag, name: "Taiwan", numberCode: "+886" },
      // { code: "TJ", image: TJFlag, name: "Tajikistan", numberCode: "+992" },
      // { code: "TZ", image: TZFlag, name: "Tanzania", numberCode: "+255" },
      // { code: "TH", image: THFlag, name: "Thailand", numberCode: "+66" },
      // { code: "TL", image: TLFlag, name: "Timor-Leste", numberCode: "+670" },
      // { code: "TG", image: TGFlag, name: "Togo", numberCode: "+228" },
      // { code: "TK", image: TKFlag, name: "Tokelau", numberCode: "+690" },
      // { code: "TO", image: TOFlag, name: "Tonga", numberCode: "+676" },
      // { code: "TT", image: TTFlag, name: "Trinidad and Tobago", numberCode: "+1-868" },
      // { code: "TN", image: TNFlag, name: "Tunisia", numberCode: "+216" },
      // { code: "TR", image: TRFlag, name: "Turkey", numberCode: "+90" },
      // { code: "TM", image: TMFlag, name: "Turkmenistan", numberCode: "+993" },
      // { code: "TV", image: TVFlag, name: "Tuvalu", numberCode: "+688" },
      // { code: "UG", image: UGFlag, name: "Uganda", numberCode: "+256" },
      // { code: "UA", image: UAFlag, name: "Ukraine", numberCode: "+380" },
      // { code: "AE", image: AEFlag, name: "United Arab Emirates", numberCode: "+971" },
      { code: "GB", image: UKFlag, name: "United Kingdom", numberCode: "+44" },
      { code: "US", image: USFlag, name: "United States", numberCode: "+1" },
      // { code: "UY", image: UYFlag, name: "Uruguay", numberCode: "+598" },
      // { code: "UZ", image: UZFlag, name: "Uzbekistan", numberCode: "+998" },
      // { code: "VU", image: VUFlag, name: "Vanuatu", numberCode: "+678" },
      // { code: "VA", image: VAFlag, name: "Vatican City", numberCode: "+379" },
      // { code: "VE", image: VEFlag, name: "Venezuela", numberCode: "+58" },
      // { code: "VN", image: VNFlag, name: "Vietnam", numberCode: "+84" },
      // { code: "YE", image: YEFlag, name: "Yemen", numberCode: "+967" },
      // { code: "ZM", image: ZMFlag, name: "Zambia", numberCode: "+260" },
      // { code: "ZW", image: ZWFlag, name: "Zimbabwe", numberCode: "+263" }
    ],
    []
  );

  useEffect(() => {
    const autoSelectRegion = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const response = await fetch(`https://api.ipgeolocation.io/reverse-geocode?apiKey=YOUR_API_KEY&lat=${position.coords.latitude}&long=${position.coords.longitude}`);
              const data = await response.json();
              const countryCode = data.country_code2;
              const region = regions.find((r) => r.code === countryCode) || regions.find((r) => r.code === "US");
              setSelectedRegion(region.code);
              setPhoneNumber(region.numberCode + " ");
            } catch (error) {
              console.error("Error fetching location:", error);
              const defaultRegion = regions.find((r) => r.code === "US");
              setSelectedRegion(defaultRegion.code);
              setPhoneNumber(defaultRegion.numberCode + " ");
            }
          },
          (error) => {
            console.error("Geolocation error:", error);
            const defaultRegion = regions.find((r) => r.code === "US");
            setSelectedRegion(defaultRegion.code);
            setPhoneNumber(defaultRegion.numberCode + " ");
          }
        );
      } else {
        const defaultRegion = regions.find((r) => r.code === "US");
        setSelectedRegion(defaultRegion.code);
        setPhoneNumber(defaultRegion.numberCode + " ");
      }
    };

    autoSelectRegion();
  }, [regions]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (region) => {
    setSelectedRegion(region.code);
    setIsDropdownOpen(false);
    const currentPhone = phoneNumber.split(" ")[1] || "";
    setPhoneNumber(region.numberCode + " " + currentPhone);
  };

  const handlePhoneNumberChange = (e) => {
    const currentRegion = regions.find((r) => r.code === selectedRegion);
    const input = e.target.value.replace(/^\+\d+\s/, "");
    setPhoneNumber(currentRegion.numberCode + " " + input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };

    console.log(formData);

    const mailtoLink = `mailto:Info@forexvoyeger.com?subject=Callback%20Request&body=First%20Name:%20${encodeURIComponent(
      firstName
    )}%0ALast%20Name:%20${encodeURIComponent(lastName)}%0AEmail:%20${encodeURIComponent(
      email
    )}%0APhone%20Number:%20${encodeURIComponent(phoneNumber)}%0AMessage:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("+1 ");
    setMessage("");
  };

  const currentRegion = regions.find((r) => r.code === selectedRegion);

  const filteredRegions = regions.filter((region) =>
    region.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="callback-form-main" >
      <form onSubmit={handleSubmit}>
        <div className="name-inputs-main" >
          <input type="text" placeholder="First Name*" value={firstName} onChange={(e) => setFirstName(e.target.value)
          } required />
          <input type="text" placeholder="Last Name*" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>

        < div className="name-inputs-main" >
          <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <div className="telephone-input-main" >
            <div className="region-select-main" onClick={toggleDropdown} >
              <img src={currentRegion.image} alt={selectedRegion} className="region-flag" />
              <Formdropdownicon />
            </div>
            < input
              required
              type="tel"
              placeholder={`Phone Number (${currentRegion.numberCode})`}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="phone-input"
            />
            {isDropdownOpen && (
              <div className="dropdown-list">
                <div className="country-search">
                  <input
                    type="text"
                    placeholder="Search country"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="searchicon">
                    <Searcicon />
                  </div>
                  {searchTerm && (
                    <div className="clear-search" onClick={() => setSearchTerm('')}>
                      <Closeicon />
                    </div>
                  )}
                </div>
                {filteredRegions.length > 0 ? (
                  <div className="country-suggestion-main">
                    {filteredRegions.map((region) => (
                      <div
                        className="form-dropdowncontent"
                        key={region.code}
                        onClick={() => handleSelect(region)}
                      >
                        <img src={region.image} alt={region.code} className="region-flag" />
                        <span className="region-name-txt">{region.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="nocountryfound">
                    <span>No Country found.</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        < div className="textarea-main" >
          <label>Message * </label>
          < textarea placeholder="Type your message here" value={message} onChange={(e) => setMessage(e.target.value)} required > </textarea>
        </div>

        < div className="terms-lin-main" >
          <p data-aos="fade-down" >
            By submitting this form, you agree to receive emails from Forex Voyager Limited in accordance with our{" "}
            <Link to={"/terms"}> Terms & Conditions </Link> and <Link to={"/privacypage"}> Privacy Policy</Link>.
          </p>
        </div>

        < div className="submit-button" >
          <button type="submit" className="submit-btn" >
            Submit
          </button>
        </div>
      </form >
    </div >
  );
}