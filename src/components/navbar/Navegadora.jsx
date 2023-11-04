
import React from "react";
import amodonas from "@/assets/img/amodonas.jpg"
import Image from "next/image";
import "./nav.css"

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";


function Navegadora() {
  return (
    <Navbar className="nav">
      <NavbarBrand>
        <p className=" text-white nombre">Amodonas</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="text-white italic m-2 border-white border-b-1"
            href="#"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="text-white italic m-2 border-white border-b-1"
          >
            Quienes somos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white italic m-2 border-white border-b-1"
            href="#"
          >
            Comprar
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white italic m-2 border-white border-b-1"
            href="#"
          >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Image
              src={amodonas}
              alt="empresa"
              className="amodonas rounded-full"
            />
          </DropdownTrigger>

          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
export default Navegadora;