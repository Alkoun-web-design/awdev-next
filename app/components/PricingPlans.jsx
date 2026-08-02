import { motion } from "motion/react"

const plans = [
    {
        type: "Landing Page / Microsite",
        price: "$1,500 – $5,000",
        description: "High-conversion design, basic form integrations, fast load times. Quick turnaround (1–2 weeks)."
    },
	{
        type: "Small Business Brochure Site",
        price: "$3,000 – $10,000",
        description: "5–15 pages, CMS (WordPress/Webflow), basic SEO setup, mobile responsiveness."
    },
    {
        type: "Custom E-commerce",
        price: "$5,000 – $25,000+",
        description: "Custom Shopify themes or headless commerce (e.g., Next.js frontend + Node.js backend), payment gateways, inventory sync."
    },
    {
        type: "Custom Web Application",
        price: "$15,000 – $75,000+",
        description: "Your sweet spot. Custom dashboards, user portals, real-time features (WebSockets), and complex third-party API integrations built with Node.js/React."
    },
	{
        type: "SaaS MVP (Minimum Viable Product",
        price: "$15,000 – $50,000",
        description: "Core feature set, user authentication, database design, and deployment. Simple web apps typically start around $15K–$35K."
    },
    {
        type: "Full-Scale SaaS / Enterprise Platform",
        price: "$50,000 – $150,000+ ",
        description: "Multi-tenant architecture, advanced security, scalability, AI integrations, and dedicated QA testing."
    }
]

export default function PricingPlans() {
    return (
        <>
            <h1 className='text-4xl grid col-span-full md:col-start-2 md:col-end-12'>Pricing Plans</h1>
            <motion.div 
              initial={{ opacity: 0, translateY: 5 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity:0 , translateY: 5 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-subgrid col-span-full md:col-start-2 md:col-end-12 justify-content-center">
                <div className="grid gap-4 grid-cols-12 col-span-full">
                    {plans.map(plan => (
                    <div key={plan.type} className="backdrop-blur-2xl bg-[#FF910010] p-4 col-span-full md:col-span-6 lg:col-span-3 border border-amber-500 rounded">
                        <h2 className="text-center text-xl">{plan.type}</h2>
                        <div className="font-[Roboto]">
                            <p className="text-lg text-center text-gray-300">A simple website for professionals</p>
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