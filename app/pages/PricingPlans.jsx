import { motion } from "motion/react"
import PageTitle from "../components/PageTitle"

// const plans = [
//     {
//         type: "Landing Page / Microsite",
//         price: "$1,500 – $5,000",
//         description: "High-conversion design, basic form integrations, fast load times. Quick turnaround (1–2 weeks)."
//     },
// 	{
//         type: "Small Business Brochure Site",
//         price: "$3,000 – $10,000",
//         description: "5–15 pages, CMS (WordPress/Webflow), basic SEO setup, mobile responsiveness."
//     },
//     {
//         type: "Custom E-commerce",
//         price: "$5,000 – $25,000+",
//         description: "Custom Shopify themes or headless commerce (e.g., Next.js frontend + Node.js backend), payment gateways, inventory sync."
//     },
//     {
//         type: "Custom Web Application",
//         price: "$15,000 – $75,000+",
//         description: "Your sweet spot. Custom dashboards, user portals, real-time features (WebSockets), and complex third-party API integrations built with Node.js/React."
//     },
// 	{
//         type: "SaaS MVP (Minimum Viable Product",
//         price: "$15,000 – $50,000",
//         description: "Core feature set, user authentication, database design, and deployment. Simple web apps typically start around $15K–$35K."
//     },
//     {
//         type: "Full-Scale SaaS / Enterprise Platform",
//         price: "$50,000 – $150,000+ ",
//         description: "Multi-tenant architecture, advanced security, scalability, AI integrations, and dedicated QA testing."
//     }
// ]

const plans = [
    {
        type: "Landing Page / Microsite for Professionals",
        description: "High-conversion and responsiveness design, basic form integrations, fast load times. Quick turnaround (1–2 weeks).",
        price: "Rs. 10,000",
        price2: "$1,500 – $5,000",
        retainer: "Rs. 5,000",
    },
	{
        type: "Brochure Site for Business",
        description: "5–15 pages, CMS optional(WordPress), basic SEO setup, mobile responsiveness.",
        price: "Rs. 20,000",
        price2: "$3,000 – $10,000",
        retainer: "Rs. 20,000",
    },
    {
        type: "Custom E-commerce",
        description: "Custom Shopify themes or headless commerce (e.g., Next.js frontend + Node.js backend), payment gateways, inventory sync.",
        price: "Rs. 40,000",
        price2: "$5,000 – $25,000+",
        retainer: "Rs. 50,000"
    },
    {
        type: "Custom Web Application",
        description: "Your sweet spot. Custom dashboards, user portals, real-time features (WebSockets), and complex third-party API integrations built with Node.js/React.",
        price: "Rs. 60,000+",
        price2: "$15,000 – $75,000+",
    },
]

export default function PricingPlans() {
    return (
        <>
            <PageTitle title="Pricing Plans" />
            <motion.div 
              initial={{ opacity: 0, translateY: 5 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity:0 , translateY: 5 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-subgrid col-span-full md:col-start-2 md:col-end-12 justify-content-center">
                <div className="grid gap-4 grid-cols-12 col-span-full">
                    {plans.map(plan => (
                        <div key={plan.type} className="backdrop-blur-2xl bg-[#FF910010] p-4 col-span-full sm:col-span-6 md:col-span-6 lg:col-span-3 border border-amber-500 rounded">
                            <h2 className="text-center text-xl">{plan.type}</h2>
                            <div className="font-[Roboto]">
                                <p className="text-lg text-center text-gray-300">{type}</p>
                                <h3 className="">Price: {plan.price}</h3>
                                <h3 className="">{plan.description}</h3>
                            </div>
                        
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    )
}