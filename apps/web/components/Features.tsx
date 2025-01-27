import DisplayCards from "./ui/display-cards"
import { DisplayCardsDemo } from "./ui/Displaycard"

export const Features = () => {
    return(

        <div className="w-full flex items-center justify-center py-24 relative">

        

        <div className="grid grid-cols-12 grid-rows-14 relative z-50 w-2xl h-[500px]">
              <div className="... row-span-1  border-b"/>
              <div className="col-span-10 row-span-1 border-b border-x"/>
              <div className="... row-span-1 border-b"/>

              <div className="... row-span-4" />
              <div className="row-span-4 col-span-10 border-x">02</div>
              <div className="... row-span-4 "/>
              
              <div className="... row-span-4 "/>
              <div className="row-span-4 col-span-10  border">02</div>
              <div className="... row-span-4 "/>
              
              <div className="... row-span-4 "/>
              <div className="row-span-4 col-span-10  border-x">02</div>
              <div className="... row-span-4 "/>
              
              <div className="... row-span-1 border-t"/>
              <div className="col-span-10 row-span-1 border-t border-x"></div>
              <div className="... row-span-1 border-t"/>


        </div>

        <div>
            <DisplayCards />
        </div>

        </div>

    )
}