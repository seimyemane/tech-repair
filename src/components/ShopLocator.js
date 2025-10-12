import React, { useEffect, useMemo, useState } from "react";

/** ----------------------------
 * Trusted Repair Shops (JSON)
 * Replace / extend with your real data or load from a JSON file.
 * --------------------------- */
const SHOPS = [
  {
    id: "dl-edm-downtown",
    name: "DeviceLab Partner — Downtown",
    brand: "DeviceLab Trusted",
    verified: true,
    rating: 4.8,
    reviews: 214,
    services: ["Screen Repair", "Battery", "Data Recovery", "Water Damage"],
    address: "10120 104 St NW, Edmonton, AB",
    city: "Edmonton",
    province: "AB",
    postal: "T5J 1A7",
    phone: "+1 825-555-0111",
    website: "https://thedevicelab.ca",
    coords: { lat: 53.5429, lng: -113.4989 },
    hours: {
      mon: "10:00–19:00",
      tue: "10:00–19:00",
      wed: "10:00–19:00",
      thu: "10:00–19:00",
      fri: "10:00–19:00",
      sat: "11:00–18:00",
      sun: "Closed",
    },
  },
  {
    id: "fixpro-southgate",
    name: "FixPro — Southgate",
    brand: "Partner",
    verified: true,
    rating: 4.7,
    reviews: 162,
    services: ["Screen Repair", "Battery", "Charging Port", "Diagnostics"],
    address: "5015 111 St NW, Edmonton, AB",
    city: "Edmonton",
    province: "AB",
    postal: "T6H 4M6",
    phone: "+1 825-555-0144",
    website: "https://example.com/fixpro",
    coords: { lat: 53.4862, lng: -113.5183 },
    hours: {
      mon: "10:00–18:00",
      tue: "10:00–18:00",
      wed: "10:00–18:00",
      thu: "10:00–18:00",
      fri: "10:00–18:00",
      sat: "11:00–17:00",
      sun: "Closed",
    },
  },
  {
    id: "rapid-repair-west",
    name: "RapidRepair — West",
    brand: "Partner",
    verified: true,
    rating: 4.6,
    reviews: 98,
    services: ["Board-Level Repair", "Mic Soldering", "Back Glass", "Battery"],
    address: "9750 170 St NW, Edmonton, AB",
    city: "Edmonton",
    province: "AB",
    postal: "T5T 5L4",
    phone: "+1 825-555-0177",
    website: "https://example.com/rapidrepair",
    coords: { lat: 53.5214, lng: -113.6245 },
    hours: {
      mon: "10:00–19:00",
      tue: "10:00–19:00",
      wed: "10:00–19:00",
      thu: "10:00–19:00",
      fri: "10:00–19:00",
      sat: "11:00–18:00",
      sun: "Closed",
    },
  },
  {
    id: "yyc-central",
    name: "YYC Phone Clinic — Central",
    brand: "Partner",
    verified: true,
    rating: 4.9,
    reviews: 320,
    services: ["Screen Repair", "Battery", "Data Recovery", "Refurb Sales"],
    address: "400 4 Ave SW, Calgary, AB",
    city: "Calgary",
    province: "AB",
    postal: "T2P 0J4",
    phone: "+1 587-555-0199",
    website: "https://example.com/yycclinic",
    coords: { lat: 51.0486, lng: -114.0719 },
    hours: {
      mon: "09:30–18:30",
      tue: "09:30–18:30",
      wed: "09:30–18:30",
      thu: "09:30–18:30",
      fri: "09:30–18:30",
      sat: "10:00–17:00",
      sun: "Closed",
    },
  },
  {
    id: "red-deer-east",
    name: "Red Deer Repair — East",
    brand: "Partner",
    verified: true,
    rating: 4.5,
    reviews: 76,
    services: ["Battery", "Charging Port", "Camera Repair"],
    address: "5002 55 St, Red Deer, AB",
    city: "Red Deer",
    province: "AB",
    postal: "T4N 7A4",
    phone: "+1 587-555-0210",
    website: "https://example.com/reddeerrepair",
    coords: { lat: 52.2681, lng: -113.8112 },
    hours: {
      mon: "10:00–18:00",
      tue: "10:00–18:00",
      wed: "10:00–18:00",
      thu: "10:00–18:00",
      fri: "10:00–18:00",
      sat: "11:00–16:00",
      sun: "Closed",
    },
  },
  {
    id: "northgate-mobile",
    name: "NorthGate Mobile",
    brand: "Partner",
    verified: false,
    rating: 4.2,
    reviews: 35,
    services: ["Screen Repair", "Back Glass", "Accessories"],
    address: "9450 137 Ave NW, Edmonton, AB",
    city: "Edmonton",
    province: "AB",
    postal: "T5E 6C2",
    phone: "+1 825-555-0251",
    website: "https://example.com/northgate",
    coords: { lat: 53.602, lng: -113.501 },
    hours: {
      mon: "11:00–18:00",
      tue: "11:00–18:00",
      wed: "11:00–18:00",
      thu: "11:00–18:00",
      fri: "11:00–18:00",
      sat: "11:00–17:00",
      sun: "Closed",
    },
  },
];

/** ----------------------------
 * Utilities
 * --------------------------- */
function haversineKm(a, b) {
  if (!a || !b) return null;
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const sinDLat = Math.sin(dLat / 2);
  const sinDLng = Math.sin(dLng / 2);
  const c =
    sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLng * sinDLng;
  const d = 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c));
  return R * d;
}

function directionsUrl(shop) {
  if (shop?.coords?.lat && shop?.coords?.lng) {
    return `https://www.google.com/maps?daddr=${shop.coords.lat},${shop.coords.lng}`;
  }
  // Fallback to address query
  const q = encodeURIComponent(
    `${shop.address}, ${shop.city} ${shop.province}`
  );
  return `https://www.google.com/maps?daddr=${q}`;
}

function embedMapSrc(shop) {
  if (shop?.coords?.lat && shop?.coords?.lng) {
    return `https://www.google.com/maps?q=${shop.coords.lat},${shop.coords.lng}&z=14&output=embed`;
  }
  const q = encodeURIComponent(`${shop.name} ${shop.address} ${shop.city}`);
  return `https://www.google.com/maps?q=${q}&z=14&output=embed`;
}

/** ----------------------------
 * Shop Card
 * --------------------------- */
function ShopCard({ shop, userLoc }) {
  const distanceKm = useMemo(() => {
    if (!userLoc || !shop.coords) return null;
    return haversineKm(userLoc, shop.coords);
  }, [userLoc, shop.coords]);

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Map (clickable) */}
      <a
        href={directionsUrl(shop)}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Directions to ${shop.name}`}
      >
        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
          <iframe
            title={`${shop.name} map`}
            src={embedMapSrc(shop)}
            className="h-full w-full"
            loading="lazy"
          />
        </div>
      </a>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">{shop.name}</h3>
            <p className="text-sm text-gray-600">
              {shop.address}, {shop.city}, {shop.province}
            </p>
            <p className="mt-1 text-xs text-gray-500">{shop.brand}</p>
          </div>

          {/* Verified & rating */}
          <div className="text-right">
            {shop.verified ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                ✓ Verified
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                Pending
              </span>
            )}
            <div className="mt-2 text-sm font-medium text-gray-800">
              ⭐ {shop.rating}{" "}
              <span className="text-gray-500">({shop.reviews})</span>
            </div>
            {distanceKm != null && (
              <div className="mt-1 text-xs text-gray-500">
                ~{distanceKm.toFixed(1)} km away
              </div>
            )}
          </div>
        </div>

        {/* Services */}
        <ul className="mt-3 flex flex-wrap gap-2">
          {shop.services.map((s) => (
            <li
              key={s}
              className="rounded-full border border-gray-200 px-2.5 py-1 text-xs text-gray-700"
            >
              {s}
            </li>
          ))}
        </ul>

        {/* Hours (today) */}
        <div className="mt-3 text-sm text-gray-700">
          <span className="font-semibold">Today: </span>
          <TodayHours hours={shop.hours} />
        </div>

        {/* Actions */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={`tel:${shop.phone.replace(/[^+\\d]/g, "")}`}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-gray-300 hover:bg-gray-50 active:translate-y-px"
          >
            Call
          </a>
          <a
            href={shop.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-gray-300 hover:bg-gray-50 active:translate-y-px"
          >
            Website
          </a>
          <a
            href={directionsUrl(shop)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-gray-300 hover:bg-gray-50 active:translate-y-px"
          >
            Get Directions
          </a>
        </div>
      </div>
    </article>
  );
}

/** ----------------------------
 * Hours helper
 * --------------------------- */
function TodayHours({ hours }) {
  const [label, setLabel] = useState("");

  useEffect(() => {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const now = new Date();
    const key = days[now.getDay()];
    const pretty =
      hours?.[key] ??
      (key ? hours?.[key.toLowerCase()] : null) ??
      "Hours not available";
    setLabel(pretty);
  }, [hours]);

  return <span>{label}</span>;
}

/** ----------------------------
 * Filters
 * --------------------------- */
function Controls({
  query,
  setQuery,
  service,
  setService,
  onlyVerified,
  setOnlyVerified,
  minRating,
  setMinRating,
  onUseMyLocation,
  userLoc,
}) {
  const uniqueServices = useMemo(() => {
    const set = new Set();
    SHOPS.forEach((s) => s.services.forEach((x) => set.add(x)));
    return ["All Services", ...Array.from(set)];
  }, []);

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name, city, address…"
        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
      />

      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
      >
        {uniqueServices.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
      >
        {[0, 3, 4, 4.5].map((r) => (
          <option key={r} value={r}>
            Min rating: {r}+
          </option>
        ))}
      </select>

      <div className="flex items-center justify-between gap-2">
        <label className="inline-flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={onlyVerified}
            onChange={(e) => setOnlyVerified(e.target.checked)}
          />
          Verified only
        </label>

        <button
          type="button"
          onClick={onUseMyLocation}
          className="rounded-xl border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50 active:translate-y-px"
        >
          {userLoc ? "Update location" : "Use my location"}
        </button>
      </div>
    </div>
  );
}

/** ----------------------------
 * Main Component
 * --------------------------- */
export default function ShopLocator() {
  const [query, setQuery] = useState("");
  const [service, setService] = useState("All Services");
  const [onlyVerified, setOnlyVerified] = useState(true);
  const [minRating, setMinRating] = useState(4);
  const [userLoc, setUserLoc] = useState(null);

  const filtered = useMemo(() => {
    let out = [...SHOPS];

    // Text search
    if (query.trim()) {
      const q = query.toLowerCase();
      out = out.filter((s) =>
        [
          s.name,
          s.address,
          s.city,
          s.province,
          s.postal,
          s.brand,
          ...s.services,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    // Service filter
    if (service !== "All Services") {
      out = out.filter((s) => s.services.includes(service));
    }

    // Verified
    if (onlyVerified) {
      out = out.filter((s) => s.verified);
    }

    // Rating
    if (minRating) {
      out = out.filter((s) => s.rating >= minRating);
    }

    // Sort by distance if user location exists
    if (userLoc) {
      out.sort((a, b) => {
        const da = a.coords
          ? haversineKm(userLoc, a.coords) ?? Infinity
          : Infinity;
        const db = b.coords
          ? haversineKm(userLoc, b.coords) ?? Infinity
          : Infinity;
        return da - db;
      });
    } else {
      // Otherwise sort by rating then reviews
      out.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
    }

    return out;
  }, [query, service, onlyVerified, minRating, userLoc]);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported on this device.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      (err) => {
        console.error(err);
        alert("Couldn't get your location. Please allow location access.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Find a Trusted Repair Shop
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Locate verified partners near you. Filter by services, rating, and
            more.
          </p>
        </header>

        {/* Controls */}
        <Controls
          query={query}
          setQuery={setQuery}
          service={service}
          setService={setService}
          onlyVerified={onlyVerified}
          setOnlyVerified={setOnlyVerified}
          minRating={minRating}
          setMinRating={setMinRating}
          onUseMyLocation={requestLocation}
          userLoc={userLoc}
        />

        {/* Results */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((shop) => (
            <ShopCard key={shop.id} shop={shop} userLoc={userLoc} />
          ))}
        </div>

        {/* No results */}
        {filtered.length === 0 && (
          <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-700">
            No shops match your filters. Try clearing the search or lowering the
            minimum rating.
          </div>
        )}
      </div>
    </section>
  );
}
