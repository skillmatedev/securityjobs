(async () => {
  const normalize = (value) => String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "")
    .replace(/(privatelimited|pvtltd|limited|ltd|inc|llc|plc)$/g, "");

  const verified = {
    "Crowdstrike": "https://www.crowdstrike.com/en-us/careers/",
    "CrowdStrike": "https://www.crowdstrike.com/en-us/careers/",
    "Emeritus": "https://careers.emeritus.org/",
    "Emirates BND Bank": "https://careers.emiratesnbd.com/",
    "Emirates NBD": "https://careers.emiratesnbd.com/",
    "Koch companies": "https://www.kochinc.com/career-opportunities",
    "Kroll": "https://careers.kroll.com/en",
    "Barclays": "https://search.jobs.barclays/",
    "[24]7.ai": "https://www.247.ai/careers",
    "20 Cube Logistics Solutions Pvt. Ltd": "https://www.20cube.com/careers/",
    "ACL Digital": "https://www.acldigital.com/careers",
    "AEP Hawaii": "https://www.aep.com/careers/",
    "Airtel Digital": "https://careers.airtel.com/",
    "Alstom": "https://jobsearch.alstom.com/",
    "Altered Security": "https://www.alteredsecurity.com/careers",
    "AMS International UAE": "https://www.ams-int.com/careers",
    "Amtex Systems Inc.": "https://www.amtexsystems.com/careers/",
    "Asana": "https://asana.com/jobs",
    "Atlassian": "https://www.atlassian.com/company/careers",
    "BMW": "https://www.bmwgroup.jobs/in/en.html",
    "Calance": "https://www.calanceus.com/careers/",
    "Centric Consulting": "https://centricconsulting.com/careers/",
    "Charterhouse Middle East": "https://www.charterhouseme.ae/jobs",
    "Chevron": "https://careers.chevron.com/",
    "Cisco Jobs": "https://jobs.cisco.com/",
    "Cititec Talent": "https://www.cititec.com/jobs/",
    "Cleareye.ai": "https://cleareye.ai/careers/",
    "Cloudflare": "https://www.cloudflare.com/careers/jobs/",
    "Conga": "https://conga.com/careers",
    "Crayon": "https://www.crayon.com/careers/",
    "CyberSec People": "https://www.cybersecpeople.com/jobs/",
    "CyberSN": "https://cybersn.com/jobs/",
    "DIAGEO India": "https://www.diageo.com/en/careers/search-and-apply",
    "Eames Consulting": "https://www.eames-group.com/jobs/",
    "Emaratech": "https://www.emaratech.ae/careers/",
    "Emirates Flight Catering": "https://www.emiratesflightcatering.com/careers/",
    "Endeavor": "https://www.endeavorco.com/careers/",
    "EPAM Anywhere": "https://anywhere.epam.com/en/jobs",
    "Experian": "https://jobs.experian.com/",
    "Experience.com": "https://www.experience.com/careers/",
    "EY GDS": "https://careers.ey.com/",
    "FlexTrade": "https://flextrade.com/careers/",
    "Gargash Group": "https://www.gargashgroup.com/careers/",
    "GlobalLogic": "https://www.globallogic.com/careers/",
    "Glocomms": "https://www.glocomms.com/jobs",
    "Gorilla - Energy data applications": "https://www.gorilla.co/careers",
    "G-P/Globalization Partners": "https://www.globalization-partners.com/careers/",
    "GROW Inc": "https://www.growinc.com/careers",
    "Guidewire Software": "https://careers.guidewire.com/",
    "H&M": "https://career.hm.com/",
    "HCLSoftware": "https://www.hcl-software.com/careers",
    "HCLTech": "https://www.hcltech.com/careers",
    "Headspace": "https://www.headspace.com/careers",
    "HID": "https://www.hidglobal.com/careers",
    "Included Health": "https://includedhealth.com/careers/",
    "InfoBeans": "https://www.infobeans.com/careers/",
    "Infosys Finacle": "https://www.infosys.com/careers/",
    "Insight Global": "https://jobs.insightglobal.com/",
    "InterGlobe Enterprises": "https://www.interglobe.com/careers/",
    "LeadSquared": "https://www.leadsquared.com/careers/",
    "LSEG (London Stock Exchange Group)": "https://www.lseg.com/en/careers",
    "Lucid Software": "https://lucid.co/careers",
    "Made Tech": "https://www.madetech.com/careers/",
    "Majid Al Futtaim": "https://careers.majidalfuttaim.com/",
    "Mashreq": "https://careers.mashreq.com/",
    "Mérieux NutriSciences Brasil": "https://careers.merieuxnutrisciences.com/",
    "Mindsprint": "https://www.mindsprint.org/careers/",
    "M2P fintech": "https://careers.m2pfintech.com/view-jobs/",
    "NielsenIQ": "https://jobs.smartrecruiters.com/NielsenIQ",
    "Netrix LLC": "https://www.netrixglobal.com/careers",
    "Noventiq": "https://careers.noventiq.com/",
    "Oben Electric": "https://obenelectric.com/careers",
    "Oportun": "https://oportun.com/careers/",
    "PepsiCo": "https://www.pepsicojobs.com/",
    "Pepsico": "https://www.pepsicojobs.com/",
    "Oscar Health": "https://www.hioscar.com/careers",
    "Palo Alto Networks": "https://jobs.paloaltonetworks.com/",
    "PayNearMe": "https://home.paynearme.com/careers/",
    "Pepperstone": "https://pepperstone.com/en/careers/",
    "Persistent Systems": "https://www.persistent.com/careers/",
    "Pondurance": "https://www.pondurance.com/careers/",
    "Radware": "https://www.radware.com/company/careers/",
    "Renault Nissan Technology & Business Centre India": "https://careers.renaultgroup.com/",
    "Riversand, a Syndigo company": "https://syndigo.com/careers/",
    "Security Joes": "https://www.securityjoes.com/careers",
    "Shell": "https://www.shell.com/careers.html",
    "Skechers": "https://about.skechers.com/careers/",
    "Sophos": "https://www.sophos.com/en-us/careers",
    "Saas Labs": "https://www.saaslabs.co/careers",
    "Bradken Limited": "https://www.bradken.com/careers/current-opportunities",
    "Crayon": "https://www.crayon.com/careers/",
    "Cogno AI": "https://exotel.com/careers/",
    "Cogno Al": "https://exotel.com/careers/",
    "Edifecs": "https://www.edifecs.com/careers/",
    "Grammarly": "https://www.grammarly.com/jobs",
    "Grammerly": "https://www.grammarly.com/jobs",
    "Stellantis": "https://careers.stellantis.com/",
    "SurveySparrow": "https://surveysparrow.com/careers/",
    "Tata Consultancy Services": "https://www.tcs.com/careers",
    "Tata Consultancy Services (TCS)": "https://www.tcs.com/careers",
    "Tata Electronics": "https://www.tataelectronics.com/careers",
    "TCS": "https://www.tcs.com/careers",
    "Tech Mahindra": "https://careers.techmahindra.com/",
    "Tenth Revolution Group": "https://www.tenthrevolution.com/careers/",
    "The Gym Group": "https://www.thegymgroup.com/careers/",
    "The Investigo Group": "https://www.investigo.co.uk/jobs/",
    "TradingHub": "https://tradinghub.com/careers/",
    "TVS Credit Services Ltd.": "https://www.tvscredit.com/careers/",
    "Two Circles": "https://twocircles.com/careers/",
    "Unacademy": "https://unacademy.com/careers",
    "VAYUZ Technologies": "https://www.vayuz.com/careers/",
    "Vivriti Capital": "https://www.vivriticapital.com/careers/",
    "Wakefern Food Corp.": "https://www2.wakefern.com/careers/",
    "Zip Co!": "https://zip.co/careers",
    "ZoomInfo": "https://www.zoominfo.com/about/careers"
  };

  const officialByName = new Map(Object.entries(verified).map(([name, url]) => [normalize(name), url]));
  try {
    const response = await fetch("../source-registry.json", { cache: "no-store" });
    if (response.ok) {
      const registry = await response.json();
      for (const source of registry.sources || []) {
        const url = source.canonicalUrl || source.careersUrl || source.feedUrl;
        if (!url || /linkedin\.com/i.test(url)) continue;
        const names = [source.name, source.company, ...(source.aliases || [])];
        for (const name of names) if (name) officialByName.set(normalize(name), url);
      }
    }
  } catch (_) {
    // The verified built-in mapping still provides safe fallbacks.
  }

  let replaced = 0;
  let unresolved = 0;
  for (const entry of DATA) {
    if (!/linkedin\.com/i.test(entry.jobUrl || "")) continue;
    const officialUrl = officialByName.get(normalize(entry.name));
    if (officialUrl) {
      entry.jobUrl = officialUrl;
      entry.status = "Official company careers page — search for current openings";
      replaced += 1;
    } else {
      entry.jobUrl = "";
      entry.status = "Official careers page is being verified; historical LinkedIn link removed";
      unresolved += 1;
    }
  }

  const stats = document.querySelectorAll(".stats .stat b");
  if (stats[1]) stats[1].textContent = DATA.filter((entry) => entry.jobUrl).length;
  const note = document.querySelector(".note");
  if (note) note.insertAdjacentHTML("beforeend", `<br><strong>LinkedIn cleanup:</strong> ${replaced} links now use official career pages; ${unresolved} unresolved historical links are hidden pending verification.`);
  draw();
})();
