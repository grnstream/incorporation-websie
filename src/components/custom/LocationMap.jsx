export default function LocationMap() {
  return (
    <div className="">
      <div className="w-[370px] sm:w-[520px] md:w-[640px] lg:w-[900px] xl:w-[1150px] p-3 bg-neutral-100 rounded-3xl transform duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.19400917252!2d79.89493427500862!3d6.867340519072153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a67fd21ddc1%3A0x902f33016ae2a831!2sKapila%20Rathnasinghe%20%26%20Co%3B%20Chartered%20Accountants!5e0!3m2!1sen!2slk!4v1757904304889!5m2!1sen!2slk"
          className="border-0 rounded-2xl aspect-[16/9]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
