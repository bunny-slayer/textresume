import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/ssr.js";
const Hideable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hide = false } = $$props;
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  return `<div class="${[
    "group relative",
    (hide ? "web-only" : "") + " " + (hide ? "text-gray-300" : "")
  ].join(" ").trim()}" role="button"><span class="${["select-none cursor-pointer", hide ? "cursor-copy" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</span></div>`;
});
const Intro_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "a.svelte-o1yxeb{text-decoration:underline}",
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "Foo" } = $$props;
  let { nickname = "" } = $$props;
  let { phone = "" } = $$props;
  let { email = "" } = $$props;
  let { github = "" } = $$props;
  let { linkedin = "" } = $$props;
  let { location = "" } = $$props;
  let { website = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.nickname === void 0 && $$bindings.nickname && nickname !== void 0)
    $$bindings.nickname(nickname);
  if ($$props.phone === void 0 && $$bindings.phone && phone !== void 0)
    $$bindings.phone(phone);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.github === void 0 && $$bindings.github && github !== void 0)
    $$bindings.github(github);
  if ($$props.linkedin === void 0 && $$bindings.linkedin && linkedin !== void 0)
    $$bindings.linkedin(linkedin);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.website === void 0 && $$bindings.website && website !== void 0)
    $$bindings.website(website);
  $$result.css.add(css$2);
  return `<div class="flex flex-wrap flex-col sm:flex-row print:flex-row text-sm sm:text-base"><div class="flex-1 text-left sm:py-4 w-48"><p><a${add_attribute("href", `tel:${phone}`, 0)} class="svelte-o1yxeb">${escape(phone)}</a></p> <p><a${add_attribute("href", `mailto:${email}`, 0)} class="svelte-o1yxeb">${escape(email)}</a></p> <p>${escape(location)}</p></div> <h2 class="flex-none order-first sm:order-none print:order-none text-4xl sm:text-2xl md:text-3xl lg:text-6xl text-center p-4 print:pt-0">${escape(name)} <span class="block -mt-1 text-base lg:text-lg">(${escape(nickname)})</span></h2> <div class="flex-1 text-left sm:text-right print:text-right sm:py-4 w-48 text-sm sm:text-base"><p><a${add_attribute("href", `https://github.com/${github}`, 0)} target="_blank" rel="noreferrer" class="svelte-o1yxeb">github.com/${escape(github)}</a></p> <p><a${add_attribute("href", `https://${website}`, 0)} target="_blank" rel="noreferrer" class="svelte-o1yxeb">${escape(website)}</a></p> <p><a${add_attribute("href", `https://linkedin.com/in/${linkedin}`, 0)} target="_blank" rel="noreferrer" class="svelte-o1yxeb">Linkedin</a></p></div> </div>`;
});
const Kofi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${$$result.head += `<!-- HEAD_svelte-kbvsbd_START --><script type="text/javascript" src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js" data-svelte-h="svelte-1px99xs"><\/script><!-- HEAD_svelte-kbvsbd_END -->`, ""} ${name ? `<div id="kofiContainer" class="web-only"></div>` : ``}`;
});
const Work_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".work-experience.svelte-1d1rh81{margin-top:1rem;margin-bottom:1rem}a.svelte-1d1rh81{text-decoration:underline}@media print{.work-experience.svelte-1d1rh81{margin-top:0.25rem;margin-bottom:0.25rem}}",
  map: null
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { position = "" } = $$props;
  let { company = "" } = $$props;
  let { url = "" } = $$props;
  let { years = [] } = $$props;
  let { details = [] } = $$props;
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.years === void 0 && $$bindings.years && years !== void 0)
    $$bindings.years(years);
  if ($$props.details === void 0 && $$bindings.details && details !== void 0)
    $$bindings.details(details);
  $$result.css.add(css$1);
  return `<div class="work-experience svelte-1d1rh81">${validate_component(Hideable, "Hideable").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex font-bold mb-2 print:mb-1"><div class="flex-1 text-left">${escape(position)}</div> <div class="flex-0"><a${add_attribute("href", url, 0)} target="_blank" rel="noreferrer" class="svelte-1d1rh81">${escape(company)}</a></div> <div class="flex-1 text-right">${escape(years.join("-"))}</div></div> <ul class="text-left list-disc pl-8 print:pl-6">${each(details, (detail) => {
        return `${validate_component(Hideable, "Hideable").$$render($$result, {}, {}, {
          default: () => {
            return `<li>${escape(detail)}</li> `;
          }
        })}`;
      })}</ul>`;
    }
  })} </div>`;
});
const App_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-9bcbti.svelte-9bcbti{overflow-x:hidden}a.svelte-9bcbti.svelte-9bcbti{text-decoration:underline}section.svelte-9bcbti.svelte-9bcbti{margin-top:1rem;margin-bottom:1rem}section.svelte-9bcbti h2.svelte-9bcbti{font-weight:600}section.svelte-9bcbti hr.svelte-9bcbti{margin-top:0px;margin-bottom:0.5rem;border-color:darkgrey}.print-only{display:none}@media print{.svelte-9bcbti.svelte-9bcbti{font-size:0.75rem;line-height:1rem}.print-only{display:inherit}.web-only{display:none}ul.svelte-9bcbti.svelte-9bcbti{padding-left:1.5rem}section.svelte-9bcbti.svelte-9bcbti{margin-top:0.5rem;margin-bottom:0.5rem}section.svelte-9bcbti hr.svelte-9bcbti{margin-top:0px;margin-bottom:0.25rem}main.svelte-9bcbti.svelte-9bcbti{margin:0 0;padding:0}}",
  map: null
};
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dataLink;
  let intro;
  let projects;
  let technologies;
  let workExperiences;
  let educations;
  let interests;
  let sourceLink;
  let fullVersionLink;
  $$result.css.add(css);
  ({ intro = {}, projects = [], technologies = [], workExperiences = [], educations = [], interests = [], resumeUrl: { sourceLink = "", fullVersionLink = "" } = {} } = {});
  dataLink = `${sourceLink}/blob/main/static/data/profile.json`;
  return ` ${intro.github == "narze" ? `${validate_component(Kofi, "Kofi").$$render($$result, { name: intro.github }, {}, {})}` : ``} <header class="web-only text-center p-4 sm:p-6 bg-green-400 text-white w-screen svelte-9bcbti"><h1 class="text-4xl svelte-9bcbti" data-svelte-h="svelte-sa9i57">Resumette</h1> <h3 class="svelte-9bcbti"><button class="underline text-lg svelte-9bcbti" data-svelte-h="svelte-zui1g9">[Print]</button></h3> <p class="svelte-9bcbti" data-svelte-h="svelte-x3co7h">Printer-friendly standard résumé, any HTML tags with <code class="svelte-9bcbti">web-only</code> CSS class will be hidden
		on print.</p> <p class="svelte-9bcbti" data-svelte-h="svelte-2g84de">You can click at any sections or lines hide some information before printing.</p> <a${add_attribute("href", sourceLink, 0)} target="_blank" rel="noopener" class="svelte-9bcbti">[Source]</a> <a${add_attribute("href", dataLink, 0)} target="_blank" rel="noopener" class="svelte-9bcbti">[Data]</a></header> <main class="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl svelte-9bcbti">${validate_component(Intro, "Intro").$$render($$result, Object.assign({}, intro), {}, {})} <section class="svelte-9bcbti">${validate_component(Hideable, "Hideable").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-2xl print:text-4xl uppercase text-left svelte-9bcbti" data-svelte-h="svelte-sqw7yj">Technologies and Languages</h2> <hr class="svelte-9bcbti"> <ul class="text-left list-disc pl-8 svelte-9bcbti">${each(technologies, (tech) => {
        return `${validate_component(Hideable, "Hideable").$$render($$result, {}, {}, {
          default: () => {
            return `<li class="svelte-9bcbti"><span class="w-28 inline-block svelte-9bcbti">${escape(tech.section)}</span> <span class="svelte-9bcbti">${escape(tech.details)}</span></li> `;
          }
        })}`;
      })}</ul>`;
    }
  })}</section> <section class="svelte-9bcbti">${validate_component(Hideable, "Hideable").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-2xl print:text-4xl uppercase text-left svelte-9bcbti" data-svelte-h="svelte-1d3pf3l">Education</h2> <hr class="svelte-9bcbti"> <ul class="text-left list-disc pl-8 svelte-9bcbti">${each(educations, (edu) => {
        return `${validate_component(Hideable, "Hideable").$$render($$result, {}, {}, {
          default: () => {
            return `<li class="svelte-9bcbti"><strong class="svelte-9bcbti">${escape(edu.head)}</strong>, ${escape(edu.details)}</li> `;
          }
        })}`;
      })}</ul>`;
    }
  })}</section> <section class="svelte-9bcbti">${validate_component(Hideable, "Hideable").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-2xl print:text-4xl uppercase text-left svelte-9bcbti" data-svelte-h="svelte-78mdgi">Work Experience</h2> <hr class="svelte-9bcbti"> ${each(workExperiences, (exp) => {
        return `${validate_component(Work, "Work").$$render($$result, Object.assign({}, exp), {}, {})}`;
      })}`;
    }
  })}</section> <section class="svelte-9bcbti">${validate_component(Hideable, "Hideable").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-2xl print:text-4xl uppercase text-left svelte-9bcbti" data-svelte-h="svelte-10km69p">Projects</h2> <hr class="svelte-9bcbti"> <ul class="text-left list-disc pl-8 svelte-9bcbti">${each(projects, (project) => {
        return `${validate_component(Hideable, "Hideable").$$render($$result, { hide: project.hide }, {}, {
          default: () => {
            return `<li class="svelte-9bcbti"><strong class="svelte-9bcbti">${escape(project.name)}</strong>
							- ${escape(project.details)} <a href="${"https://" + escape(project.url, true)}" target="_blank" rel="noreferrer" class="svelte-9bcbti"><strong class="svelte-9bcbti">${escape(project.url)}</strong></a></li> `;
          }
        })}`;
      })}</ul>`;
    }
  })}</section> <section class="svelte-9bcbti">${validate_component(Hideable, "Hideable").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-2xl print:text-4xl uppercase text-left svelte-9bcbti" data-svelte-h="svelte-1g0yz66">Interests</h2> <hr class="svelte-9bcbti"> <ul class="text-left list-disc pl-8 svelte-9bcbti">${each(interests, (interest) => {
        return `${validate_component(Hideable, "Hideable").$$render($$result, {}, {}, {
          default: () => {
            return `<li class="svelte-9bcbti">${escape(interest)}</li> `;
          }
        })}`;
      })}</ul>`;
    }
  })}</section> <footer class="print-only svelte-9bcbti">(See <a${add_attribute("href", fullVersionLink, 0)} target="_blank" rel="noopener" class="svelte-9bcbti">full version</a>
		or <a${add_attribute("href", sourceLink, 0)} target="_blank" rel="noopener" class="svelte-9bcbti">source</a>)</footer> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(App, "App").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
