// @ts-ignore
import { VNode } from "vue";
import { ClassComponent, GlobalComponentConstructor } from "../ts-helpers";

export interface dtButtonProps {
  tag?: string | "button";
  type?: string | "button";
  role?: string | "button";
  block?: Boolean | false;
  pill?: Boolean | false;
  variant?: string | "btn-secondary";
  size?: string | undefined;
  rounded?: Boolean | false;
  floating?: Boolean | false;
  toggler?: Boolean | false;
  toggle?: Boolean | false;
  picker?: Boolean | false;
}
export interface dtButtonSlots {}

export declare type dtButtonEmits = {}

declare class dtButton extends ClassComponent<dtButtonProps, dtButtonSlots, dtButtonEmits> {

}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        dtButton: GlobalComponentConstructor<dtButton>
    }
}

export default dtButton;
