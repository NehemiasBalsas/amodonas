"use client"
import React, { useEffect } from "react";
import amodonas from "@/assets/img/amodonas.jpg";
import Image from "next/image";
import "./nav.css";

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
  useEffect(() => {
    const handleLinkClick = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 60; // Ajusta el desplazamiento según tu diseño
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <Navbar className="nav" id="nav">
      <NavbarBrand>
        <a className="text-white nombre nav-link" href="#Home">
          Amodonas
        </a>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="text-white italic m-2 border-white border-b-1 nav-link"
            href="#Home"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white italic m-2 border-white border-b-1 nav-link"
            href="#quienes_somos"
          >
            Quienes somos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white italic m-2 border-white border-b-1 nav-link"
            href="#compras"
          >
            Ordenar Donas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white italic m-2 border-white border-b-1 nav-link"
            href="#contacto"
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
