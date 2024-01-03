import Image from "next/image"
import locationIcon from "/public/location-icon.svg"
import phoneIcon from "/public/phone-call.svg"
import mail from "/public/mail.svg"
export const RectangleRounded = () => {
    return (
        <div className="hidden w-full rounded-full radial-gradient py-11 px-10 md:flex justify-between">
            <div className="flex items-center">
                <div>
                    <Image src={locationIcon} alt="Location Icon"
                    width={50}
                    height={50}
                    />
                </div>
                <div>
                    <h2 className="lg:text-2xl text-white font-bold md:text-lg">Pay Us a Visit</h2>
                    <p className="text-xs font-normal text-white">Union St, Seattle, WA 98101, United States</p>
                </div>
            </div>
            <div className="flex items-center gap-7 w-[250px]">
                <div>
                    <Image src={phoneIcon} alt="Location Icon"
                    width={50}
                    height={50}
                    />
                </div>
                <div>
                    <h2 className="lg:text-2xl text-white font-bold md:text-lg">Give Us a Call</h2>
                    <p className="text-sm font-normal text-white">(110) 1111-1010</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div>
                    <Image src={mail} alt="Location Icon"
                    width={50}
                    height={50}
                    />
                </div>
                <div>
                    <h2 className="lg:text-2xl text-white font-bold md:text-lg">Send Us a Message</h2>
                    <p className="text-sm font-normal text-white">Contact@HydraVTech.com</p>
                </div>
            </div>
        </div>
    )
}
