import React, { Component } from 'react';

import ChoroplethMapSetup from './ChoroplethMapSetup';

class ChoroplethMap extends Component {
  country = {
    data: [
      ["ABW",3],	["AFG",65],	["AGO",44],	["AIA",28],	["ALB",7],	["ALD",38],	["AND",36],	["ARE",19],	["ARG",82],	["ARM",69],
      ["ASM",65],	["ATA",63],	["ATC",29],	["ATF",78],	["ATG",69],	["AUS",51],	["AUT",82],	["AZE",24],	["BDI",10],	["BEL",11],
      ["BEN",56],	["BFA",75],	["BGD",47],	["BGR",90],	["BHR",10],	["BHS",1],	["BIH",83],	["BJN",2],	["BLM",1],	["BLR",8],
      ["BLZ",60],	["BMU",20],	["BOL",70],	["BRA",61],	["BRB",17],	["BRN",64],	["BTN",72],	["BWA",18],	["CAF",49],	["CAN",83],
      ["CHE",34],	["CHL",77],	["CHN",9],	["CIV",27],	["CLP",37],	["CMR",51],	["COD",49],	["COG",45],	["COK",49],	["COL",64],
      ["COM",73],	["CPV",29],	["CRI",98],	["CSI",83],	["CUB",85],	["CUW",40],	["CYM",25],	["CYN",12],	["CYP",45],	["CZE",50],
      ["DEU",59],	["DJI",39],	["DMA",94],	["DNK",31],	["DOM",67],	["DZA",13],	["ECU",98],	["EGY",44],	["ERI",70],	["ESB",11],
      ["ESP",21],	["EST",10],	["ETH",59],	["FIN",6],	["FJI",68],	["FLK",60],	["FRA",4],	["FRO",30],	["FSM",4],	["GAB",28],
      ["GBR",75],	["GEO",77],	["GGY",50],	["GHA",56],	["GIB",39],	["GIN",26],	["GMB",93],	["GNB",69],	["GNQ",53],	["GRC",33],
      ["GRD",63],	["GRL",59],	["GTM",58],	["GUM",45],	["GUY",39],	["HKG",77],	["HMD",17],	["HND",11],	["HRV",45],	["HTI",95],
      ["HUN",3],	["IDN",0],	["IMN",94],	["IND",25],	["IOA",44],	["IOT",41],	["IRL",88],	["IRN",63],	["IRQ",13],	["ISL",34],
      ["ISR",54],	["ITA",50],	["JAM",81],	["JEY",94],	["JOR",40],	["JPN",70],	["KAB",63],	["KAS",41],	["KAZ",27],	["KEN",31],
      ["KGZ",60],	["KHM",97],	["KIR",91],	["KNA",94],	["KOR",85],	["KOS",54],	["KWT",19],	["LAO",81],	["LBN",70],	["LBR",87],
      ["LBY",38],	["LCA",59],	["LIE",68],	["LKA",58],	["LSO",4],	["LTU",21],	["LUX",63],	["LVA",21],	["MAC",38],	["MAF",17],
      ["MAR",97],	["MCO",65],	["MDA",37],	["MDG",36],	["MDV",88],	["MEX",55],	["MHL",71],	["MKD",67],	["MLI",71],	["MLT",57],
      ["MMR",96],	["MNE",77],	["MNG",76],	["MNP",91],	["MOZ",76],	["MRT",58],	["MSR",73],	["MUS",49],	["MWI",36],	["MYS",51],
      ["NAM",57],	["NCL",18],	["NER",36],	["NFK",63],	["NGA",51],	["NIC",89],	["NIU",55],	["NLD",35],	["NOR",36],	["NPL",57],
      ["NRU",35],	["NUL",52],	["NZL",75],	["OMN",41],	["PAK",77],	["PAN",33],	["PCN",39],	["PER",85],	["PGA",39],	["PHL",81],
      ["PLW",97],	["PNG",27],	["POL",74],	["PRI",92],	["PRK",90],	["PRT",79],	["PRY",36],	["PSX",84],	["PYF",96],	["QAT",29],
      ["ROU",55],	["RUS",37],	["RWA",22],	["SAH",62],	["SAU",69],	["SCR",78],	["SDN",35],	["SDS",59],	["SEN",55],	["SER",80],
      ["SGP",40],	["SGS",65],	["SHN",55],	["SLB",67],	["SLE",46],	["SLV",31],	["SMR",10],	["SOL",58],	["SOM",38],	["SPM",10],
      ["SRB",27],	["STP",85],	["SUR",3],	["SVK",28],	["SVN",72],	["SWE",99],	["SWZ",4],	["SXM",31],	["SYC",12],	["SYR",28],
      ["TCA",24],	["TCD",48],	["TGO",85],	["THA",21],	["TJK",58],	["TKM",32],	["TLS",3],	["TON",59],	["TTO",31],	["TUN",41],
      ["TUR",81],	["TUV",94],	["TWN",77],	["TZA",40],	["UGA",56],	["UKR",36],	["UMI",59],	["URY",80],	["USA",47],	["USG",52],
      ["UZB",25],	["VAT",34],	["VCT",62],	["VEN",58],	["VGB",34],	["VIR",54],	["VNM",97],	["VUT",90],	["WLF",99],	["WSB",51],
      ["WSM",21],	["YEM",16],	["ZAF",51],	["ZMB",48],	["ZWE",65]
    ],
  }
  render() {
    return (
      <div className="rendered-datamap" style={{
        height:"660px",
        width: "100%",
      }}>
        <ChoroplethMapSetup data={this.country.data}/>
      </div>
    );
  }
}

export default ChoroplethMap;
