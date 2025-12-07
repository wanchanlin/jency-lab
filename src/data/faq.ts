import { Shield, Heart, Droplets, Recycle, Sparkles, Truck, FileQuestion } from "lucide-react";
export const faqSections = [
    {
      title: "Ingredients & Safety",
      description: "Learn how we source, test, and label every bar.",
      icon: Shield,
      items: [
        {
          question: "Are your soaps safe for sensitive skin?",
          answer:
            "Yes. We use gentle oils, clays, and botanicals, avoiding sulfates, parabens, and synthetic fragrances. Patch testing is still recommended for reactive skin.",
        },
        {
          question: "Are your products vegan?",
          answer:
            "Most recipes are vegan. When we use ingredients like local honey, it is clearly listed on the product page and label.",
        },
        {
          question: "How do you fragrance the soaps?",
          answer:
            "We rely on pure essential oils and plant absolutes—never artificial perfumes or dyes.",
        },
        {
          question: "Do you use preservatives?",
          answer:
            "Cold-process soap naturally self-preserves, so we do not use synthetic preservatives. For products containing water (such as scrubs), we use safe, eco-friendly preservatives when needed.",
        },
        {
          question: "Are your products nut-free?",
          answer:
            "Some bars may include nut oils such as sweet almond oil. If you have allergies, check ingredient lists carefully or contact us for recommendations.",
        },
        {
          question: "Are your products cruelty-free?",
          answer:
            "Absolutely. We never test on animals and source from suppliers who follow the same ethical standards.",
        },
      ],
    },

    {
      title: "Skin Types & Usage",
      description: "Find the right bar for your skin and how to use it properly.",
      icon: Heart,
      items: [
        {
          question: "Which soaps are best for dry or sensitive skin?",
          answer:
            "Choose bars high in olive oil, shea butter, oatmeal, or chamomile. These ingredients cleanse gently without stripping moisture.",
        },
        {
          question: "Can I use your soap on my face?",
          answer:
            "Yes. Our bars are free of harsh detergents. For acne-prone or sensitive skin, we recommend unscented or clay-based varieties.",
        },
        {
          question: "Are your products safe for kids?",
          answer:
            "Yes, but we recommend unscented or lightly scented bars for young children, as their skin is more delicate.",
        },
        {
          question: "How often can I use handmade soap?",
          answer:
            "Daily use is perfectly fine. Our soaps are formulated to be gentle and nourishing.",
        },
        {
          question: "Can I use your soap as shampoo?",
          answer:
            "Some customers do! However, handmade soap has a different pH than modern shampoos. If you try it, consider following with a diluted vinegar rinse.",
        },
      ],
    },

    {
      title: "Product Care",
      description: "Tips to make every bar last and feel luxurious.",
      icon: Droplets,
      items: [
        {
          question: "How should I store my soap?",
          answer:
            "Let it dry between uses on a draining dish. Keeping bars out of direct streams of water extends their lifespan significantly.",
        },
        {
          question: "What’s the shelf life?",
          answer:
            "Unopened bars stay fresh for 12 months. Natural scents may mellow over time, but performance remains the same.",
        },
        {
          question: "Why does handmade soap sometimes 'sweat'?",
          answer:
            "Natural glycerin attracts moisture from the air. This is normal and doesn't affect performance.",
        },
        {
          question: "Can I travel with your soap?",
          answer:
            "Definitely. Allow it to dry, then tuck it into the cotton bag we ship it in for a leak-free travel companion.",
        },
      ],
    },

    {
      title: "Sustainability & Packaging",
      description: "Our commitment to eco-friendly, low-waste skincare.",
      icon: Recycle,
      items: [
        {
          question: "Is your packaging recyclable or compostable?",
          answer:
            "Yes. Our paper wraps and shipping materials are entirely recyclable or compostable, and we avoid plastic whenever possible.",
        },
        {
          question: "Are your ingredients ethically sourced?",
          answer:
            "We partner with trusted suppliers who prioritize fair trade, sustainable harvesting, and eco-conscious practices.",
        },
        {
          question: "Do you use palm oil?",
          answer:
            "We either avoid palm oil entirely or use certified sustainable palm oil when required for certain formulations.",
        },
        {
          question: "Do you offset your carbon footprint?",
          answer:
            "We minimize emissions by producing in small batches locally and using plastic-free, lightweight packaging.",
        },
      ],
    },

    {
      title: "Custom & Wholesale",
      description: "Support for events, boutiques, and brand collaborations.",
      icon: Sparkles,
      items: [
        {
          question: "Do you create custom favors?",
          answer:
            "Yes—weddings, baby showers, and corporate gifts are some of our favorites. Reach out at least 6 weeks in advance for best availability.",
        },
        {
          question: "Do you offer wholesale pricing?",
          answer:
            "Boutiques and spas can apply for wholesale access via our contact form. We'll share line sheets and minimum order details once approved.",
        },
        {
          question: "Can I request a custom scent or color?",
          answer:
            "Custom scents, botanicals, or designs can be created for bulk or event orders. Minimum batch quantities apply.",
        },
      ],
    },

    {
      title: "Ordering & Shipping",
      description:
        "Everything you need to know about timelines, delivery, and gift options.",
      icon: Truck,
      items: [
        {
          question: "How long does it take to process my order?",
          answer:
            "Orders are crafted, packed, and ready to ship within 2–3 business days. You'll receive tracking details as soon as it leaves our studio.",
        },
        {
          question: "Do you offer local pickup?",
          answer:
            "Local pickup in Toronto is available upon request—just leave a note at checkout and we'll coordinate via email.",
        },
        {
          question: "Can I send an order as a gift?",
          answer:
            "Absolutely! Add a gift note during checkout and we'll handwrite it on a recycled card. Prices are never included.",
        },
        {
          question: "What if my package arrives damaged?",
          answer:
            "Contact us within 48 hours with photos and we'll make it right—replacement or store credit included.",
        },
      ],
    },

    {
      title: "Returns & Policies",
      description:
        "Important details about cancellations, replacements, and hygiene safety.",
      icon: FileQuestion,
      items: [
        {
          question: "Do you accept returns?",
          answer:
            "Due to the personal nature of skincare, we cannot accept returns once items have been opened. Please contact us if there's an issue with your order.",
        },
        // {
        //   question: "Can I cancel my order?",
        //   answer:
        //     "Orders can be cancelled within 12 hours of purchase, as long as they haven't been shipped.",
        // },
        {
          question: "What if I entered the wrong address?",
          answer:
            "Email us immediately. If the order hasn’t shipped, we can update it. If it has already left our studio, we'll guide you through next steps.",
        },
      ],
    },
  ];